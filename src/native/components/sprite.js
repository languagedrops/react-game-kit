import React, { useState, useEffect, useContext } from 'react';
import { View, Image } from 'react-native';

import { LoopContext } from './loop';
import { ScaleContext } from './stage';

const Sprite = ({
  offset = [0, 0],
  onPlayStateChanged = () => { },
  repeat = true,
  scale: propsScale,
  src = '',
  state = 0,
  steps = [],
  style = {},
  ticksPerFrame = 4,
  tileHeight = 64,
  tileWidth = 64,
}) => {
  const loop = useContext(LoopContext);
  const scale = useContext(ScaleContext);

  const [currentStep, setCurrentStep] = useState(0);
  const [tickCount, setTickCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (tickCount === ticksPerFrame && !finished) {
        if (steps[state] !== 0) {
          const nextStep = currentStep === steps[state] ? 0 : currentStep + 1;

          setCurrentStep(nextStep);

          if (currentStep === steps[state] && repeat === false) {
            setFinished(true);
            onPlayStateChanged(0);
          }
        }

        setTickCount(0);
      } else {
        setTickCount(tickCount + 1);
      }
    };

    const subscription = loop.subscribe(animate);
    onPlayStateChanged(1);

    return () => {
      loop.unsubscribe(subscription);
    };
  }, [loop, state, steps, repeat, currentStep, tickCount, finished]);

  useEffect(() => {
    if (state !== 0) {
      setFinished(false);
      setTickCount(0);
      setCurrentStep(0);
    }
  }, [state]);

  const getImageStyles = () => {
    const left = offset[0] + (currentStep * tileWidth);
    const top = offset[1] + (state * tileHeight);

    return {
      position: 'absolute',
      transform: [
        { translateX: left * -1 },
        { translateY: top * -1 },
      ],
    };
  };

  const getWrapperStyles = () => {
    const appliedScale = propsScale || scale;
    return {
      height: tileHeight,
      width: tileWidth,
      overflow: 'hidden',
      position: 'relative',
      transform: [{ scale: appliedScale }],
    };
  };

  return (
    <View style={{ ...getWrapperStyles(), ...style }}>
      <Image style={getImageStyles()} source={src} />
    </View>
  );
};

export default Sprite;