import React, { useState, useEffect } from 'react';

import GameLoop from '../utils/game-loop';

const LoopContext = React.createContext();

const Loop = ({ children, style }) => {
  const [loop] = useState(new GameLoop());

  useEffect(() => {
    loop.start();
    return () => loop.stop();
  }, [loop]);
    const defaultStyles = {
      height: '100%',
      width: '100%',
    };
  const styles = { ...defaultStyles, ...style };

    return (
    <LoopContext.Provider value={loop}>
      <div style={styles}>
        {children}
      </div>
    </LoopContext.Provider>
    );
};

const useLoop = () => {
  const loop = React.useContext(LoopContext);
  if (!loop) {
    throw new Error('useLoop must be used within a LoopProvider');
  }
  return loop;
};

export { Loop, useLoop };
