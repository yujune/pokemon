import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './SettingScreen.style';
import {FlatList, Switch} from 'react-native';
import {SettingListItem} from '../../components/SettingListItem/SettingListItem';
import {useCustomTheme} from '../../context/theme/theme_provider';
import {AppColor} from '../../utils/color';

export const SettingScreen: FC = () => {
  const {theme, toggleTheme} = useCustomTheme();
  const [isEnabled, setIsEnabled] = useState(theme.name === 'dark');
  const toggleSwitch = () => {
    toggleTheme(theme.name === 'light' ? 'dark' : 'light');
    setIsEnabled(previousState => !previousState);
  };

  const settingListItem = [
    {
      label: 'Dark Theme',
      icon: (
        <Switch
          trackColor={{false: AppColor.boulder, true: AppColor.denimBlue}}
          thumbColor={AppColor.haze}
          ios_backgroundColor={AppColor.cloud}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ),
    },
  ];

  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={[style.fill, {backgroundColor: theme.color.background}]}>
      <FlatList
        style={[style.flatList, {backgroundColor: theme.color.background}]}
        bounces={false}
        data={settingListItem}
        keyExtractor={item => item.label}
        renderItem={({item}) => (
          <SettingListItem label={item.label} customRightIcon={item.icon} />
        )}
      />
    </SafeAreaView>
  );
};
