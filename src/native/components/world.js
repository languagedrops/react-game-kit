import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import Matter, { Engine, Events } from 'matter-js';

import { LoopContext } from './loop';

const EngineContext = React.createContext();

const World = ({ children, gravity = { x: 0, y: 0, scale: 0.001 }, onCollision = () => 0, onInit = () => 0, onUpdate = () => 0 }) => {
  const loop = useContext(LoopContext);

  const [engine] = useState(() => {
    const world = Matter.World.create({ gravity });
    return Engine.create({ world });
  });

  useEffect(() => {
    const loopID = loop.subscribe(() => {
      const currTime = 0.001 * Date.now();
      Engine.update(engine, 1000 / 60, currTime);
    });
    return () => loop.unsubscribe(loopID);
  }, [loop, engine]);

  useEffect(() => {
    onInit(engine);
    Events.on(engine, 'afterUpdate', onUpdate);
    Events.on(engine, 'collisionStart', onCollision);
    return () => {
      Events.off(engine, 'afterUpdate', onUpdate);
      Events.off(engine, 'collisionStart', onCollision);
    };
  }, [engine, onInit, onUpdate, onCollision]);

  useEffect(() => {
    if (gravity) {
      engine.world.gravity = gravity;
    }
  }, [gravity, engine]);

  return (
    <EngineContext.Provider value={engine}>
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </EngineContext.Provider>
  );
};

export { EngineContext };
export default World;