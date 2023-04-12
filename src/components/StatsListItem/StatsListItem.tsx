import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Props} from './StatsListItem.type';
import {style} from './StatsListItem.style';
import {Bar} from 'react-native-progress';
import {MaxStat} from '../../utils/constants';
import {useCustomTheme} from '../../context/theme/theme_provider';

export const StatsListItem: FC<Props> = ({stat}) => {
  const {theme} = useCustomTheme();
  return (
    <View style={style.container}>
      <Text numberOfLines={1} style={style.name}>
        {stat?.stat.name}
      </Text>
      <Text style={style.stat}>{stat?.base_stat}</Text>
      {/* TODO: animation not working */}
      <Bar
        style={style.progressBar}
        progress={
          (stat?.base_stat ?? 0) / MaxStat.getMaxStats(stat?.stat.name ?? '')
        }
        height={15}
        width={0}
        color={theme.color.progress?.toString()}
        borderColor={theme.color.progress?.toString()}
      />
    </View>
  );
};
