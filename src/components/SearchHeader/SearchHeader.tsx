import {SearchBar} from '@rneui/base';
import React, {FC} from 'react';
import {View} from 'react-native';
import {Props} from './SearchHeader.type';
import Icon from 'react-native-vector-icons/Ionicons';
import {style} from './SearchHeader.style';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const SearchHeader: FC<Props> = ({
  search,
  updateSearch,
  onBackButtonPressed,
}) => {
  const {theme} = useCustomTheme();
  return (
    <View style={[style.container, {backgroundColor: theme.color.background}]}>
      <Icon
        name="arrow-back-outline"
        size={25}
        onPress={onBackButtonPressed}
        color={theme.color.icon}
      />
      <SearchBar
        autoFocus
        enablesReturnKeyAutomatically={false}
        containerStyle={[
          style.searchBarContainer,
          {
            backgroundColor: theme.color.background,
            borderColor: theme.color.inputBorder,
            borderTopColor: theme.color.inputBorder,
            borderBottomColor: theme.color.inputBorder,
          },
        ]}
        inputContainerStyle={[
          style.inputContainer,
          {
            backgroundColor: theme.color.background,
          },
        ]}
        searchIcon={<Icon name="search" size={20} color={theme.color.icon} />}
        leftIconContainerStyle={{backgroundColor: theme.color.background}}
        style={{backgroundColor: theme.color.background}}
        placeholder="Bulbasaur"
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};
