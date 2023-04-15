import React, {FC} from 'react';
import {View} from 'react-native';
import {style} from './CardContainer.style';
import {Props} from './CardContainer.type';

export const CardContainer: FC<Props> = ({children, containerStyle}) => {
  return <View style={[style.container, containerStyle]}>{children}</View>;
};
