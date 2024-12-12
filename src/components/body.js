import React, { useContext, useEffect, useState } from 'react';
import Matter, { Bodies, World } from 'matter-js';
import { EngineContext } from './world';

const BodyContext = React.createContext();

const Body = ({
  angle,
  area,
  args = [0, 0, 100, 100],
  axes,
  bounds,
  children,
  collisionFilter,
  density,
  force,
  friction = 1,
  frictionAir,
  frictionStatic = 0,
  id,
  inertia,
  inverseInertia,
  inverseMass,
  isSensor,
  isSleeping,
  isStatic,
  label,
  mass,
  position,
  restitution = 0,
  shape = 'rectangle',
  sleepThreshold,
  slop,
  slope,
  timeScale,
  torque,
  vertices,
  ...options
}) => {
  const engine = useContext(EngineContext);
  const [body, setBody] = useState(null);

  useEffect(() => {
    const newBody = Bodies[shape](...args, options);
    World.addBody(engine.world, newBody);
    setBody(newBody);
    return () => {
      World.remove(engine.world, newBody);
    };
  }, [args, engine, options, shape]);

  useEffect(() => {
    if (body) {
      Object.keys(options).forEach((option) => {
        if (option in body) {
          Matter.Body.set(body, option, options[option]);
        }
      });
    }
  }, [body, options]);

  return (
    <BodyContext.Provider value={body}>
      {children}
    </BodyContext.Provider>
  );
};

export { BodyContext };
export default Body;