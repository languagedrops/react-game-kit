import React, { useContext, useEffect, useState } from 'react';
import Matter, { Bodies, World } from 'matter-js';
import { EngineContext } from './world';

const BodyContext = React.createContext();

const Body = ({
  args = [0, 0, 100, 100],
  friction = 1,
  frictionStatic = 0,
  restitution = 0,
  shape = 'rectangle',
  ...options
}) => {
  const engine = useContext(EngineContext);
  const [body, setBody] = useState(null);
  const optionsWithDefaults = React.useMemo(() => ({
    ...options,
    friction,
    frictionStatic,
    restitution,
  }), [options, friction, frictionStatic, restitution]);

  useEffect(() => {
    const newBody = Bodies[shape](...args, optionsWithDefaults);
    World.addBody(engine.world, newBody);
    setBody(newBody);
    return () => {
      World.remove(engine.world, newBody);
    };
  }, [args, engine, optionsWithDefaults, shape]);

  useEffect(() => {
    if (body) {
      Object.keys(optionsWithDefaults).forEach((option) => {
        if (option in body) {
          Matter.Body.set(body, option, optionsWithDefaults[option]);
        }
      });
    }
  }, [body, optionsWithDefaults]);

  return (
    <BodyContext.Provider value={body}>
      {children}
    </BodyContext.Provider>
  );
};

export { BodyContext };
export default Body;