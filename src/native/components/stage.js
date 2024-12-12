// Users/anton/Documents/Develop/Projects/react-game-kit/src/native/components/stage.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { View, Dimensions } from 'react-native';

// Create a new context for scale
const ScaleContext = React.createContext();

export const useScale = () => React.useContext(ScaleContext);

const Stage = ({ children, height = 576, width = 1024, style }) => {
  const [dimensions, setDimensions] = useState([0, 0]);

  useEffect(() => {
    const { height: vheight, width: vwidth } = Dimensions.get('window');
    setDimensions([vheight, vwidth]);
  }, []);

  const getScale = () => {
    const [vheight, vwidth] = dimensions;
    let targetWidth;
    let targetHeight;
    let targetScale;

    if (height / width > vheight / vwidth) {
      targetHeight = vheight;
      targetWidth = targetHeight * width / height;
      targetScale = vheight / height;
    } else {
      targetWidth = vwidth;
      targetHeight = targetWidth * height / width;
      targetScale = vwidth / width;
    }

    return {
      height: targetHeight,
      width: targetWidth,
      scale: targetScale,
    };
  };

  const scale = getScale();
  const getWrapperStyles = () => ({
    flex: 1,
  });

  const getInnerStyles = () => {
    const xOffset = Math.floor((dimensions[1] - scale.width) / 2);
    const yOffset = Math.floor((dimensions[0] - scale.height) / 2);

    return {
      height: Math.floor(scale.height),
      width: Math.floor(scale.width),
      position: 'absolute',
      overflow: 'hidden',
      left: xOffset,
      top: yOffset,
    };
  };

  return (
    <ScaleContext.Provider value={scale.scale}>
      <View style={getWrapperStyles()}>
        <View style={{ ...getInnerStyles(), ...style }}>
          {children}
        </View>
      </View>
    </ScaleContext.Provider>
  );
}

export default Stage