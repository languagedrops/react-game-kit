import React, { useState, useEffect } from 'react';
import {
  View,
} from 'react-native';

import GameLoop from '../utils/game-loop';

const LoopContext = React.createContext();

const Loop = ({ children, style }) => {
  const [loop] = useState(new GameLoop());

  useEffect(() => {
    loop.start();
    return () => loop.stop();
  }, [loop]);
  return (
    <LoopContext.Provider value={loop}>
      <View style={{ flex: 1, ...style }}>
        {children}
      </View>
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

export { LoopContext, useLoop };
export default Loop;
