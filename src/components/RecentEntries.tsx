import React, {useContext} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../utilities/AppContext';
import tokens from '../utilities/tokens';
import {CalorieEntry} from '../utilities/Types';
import Card from './Card';

function RecentEntries() {
  const appContext = useContext(AppContext);
  const calorieEntries = appContext.calorieEntries;

  const renderItem = ({item}: {item: CalorieEntry}) => {
    return (
      <View style={styles.entryContainer}>
        <View style={styles.iconLabelRow}>
          <Icon
            style={styles.icon}
            name={item.icon}
            color={tokens.colors.light}
            size={36}
          />
          <View style={[styles.labelDateColumn]}>
            <Text style={styles.mediumText}>{item.label}</Text>
            <Text style={styles.smallText}>12:15pm</Text>
          </View>
        </View>
        <Text style={styles.mediumText}>
          {item.number} <Text style={styles.smallText}>kCal</Text>
        </Text>
      </View>
    );
  };

  return (
    <Card
      title="Recent Entries"
      onHeaderPress={() => {}}
      innerContent={
        <FlatList
          style={styles.list}
          data={calorieEntries}
          renderItem={renderItem}
          persistentScrollbar={false}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    height: 250,
  },
  entryContainer: {
    paddingVertical: tokens.spacing.half,
    paddingRight: tokens.spacing.half,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelDateColumn: {
    flexDirection: 'column',
  },
  icon: {
    paddingRight: tokens.spacing.half,
  },
  mediumText: {
    color: tokens.colors.white,
    fontSize: tokens.fontSizes.MD,
  },
  smallText: {
    color: tokens.colors.white,
    fontSize: tokens.fontSizes.SM,
  },
});

export default RecentEntries;
