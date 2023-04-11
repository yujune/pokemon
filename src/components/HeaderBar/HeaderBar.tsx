import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Animated, Image, Pressable, View} from 'react-native';
import {style} from './HeaderBar.style';
import {Props} from './HeaderBar.type';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const HeaderBar: FC<Props> = ({scrollValue, name}) => {
  const {theme} = useCustomTheme();
  const navigation = useNavigation();
  const goBack = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollValue.value,
        [0, 60, 90],
        [0, 0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={[
        style.headerContainer,
        {backgroundColor: theme.color.background},
      ]}>
      <View style={style.headerWrapper}>
        <Pressable onPress={goBack}>
          <Image
            style={[style.headerImage, {tintColor: theme.color.text}]}
            resizeMode="contain"
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/VisualEditor_-_Icon_-_Close_-_white.svg/1200px-VisualEditor_-_Icon_-_Close_-_white.svg.png',
            }}
          />
        </Pressable>
        <Animated.View style={animatedStyle}>
          <Animated.Text
            style={[
              style.headerText,
              animatedStyle,
              {color: theme.color.text},
              theme.text?.headerMedium,
            ]}>
            {name}
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
