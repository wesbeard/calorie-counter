import React, {useContext} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../utilities/AppContext';
import tokens from '../utilities/Tokens';
import {CalorieEntry} from '../utilities/Types';
import Card from './Card';

function RecentEntries() {
  const appContext = useContext(AppContext);
  const calorieEntries = appContext.calorieEntries;

  const renderItem = ({item}: {item: CalorieEntry}) => {
    return (
      <View style={styles.entryContainer}>
        <View style={styles.calorieNumContainer}>
          <Text style={styles.largeText}>
            {item.calories} <Text style={styles.smallText}>kCal</Text>
          </Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.iconLabelRow}>
          <Icon
            style={styles.icon}
            name={item.icon}
            color={tokens.colors.light}
            size={24}
          />
          <Text style={styles.mediumText}>{item.label}</Text>
        </View>
        <View style={styles.spacer} />
        <View style={[styles.iconLabelRow]}>
          <Icon
            style={styles.icon}
            name="timetable"
            color={tokens.colors.light}
            size={24}
          />
          <Text style={styles.smallText}>{item.timestamp.toString()}</Text>
        </View>
      </View>
    );
  };

  return (
    <Card
      title="Recent Entries"
      onHeaderPress={() => {}}
      innerContent={
        <FlatList
          horizontal={true}
          style={styles.list}
          data={calorieEntries}
          renderItem={renderItem}
          indicatorStyle="white"
          persistentScrollbar
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: tokens.spacing.regular,
  },
  spacer: {
    height: tokens.spacing.half,
  },
  entryContainer: {
    maxWidth: 200,
    backgroundColor: tokens.colors.highElevation,
    padding: tokens.spacing.half,
    marginRight: tokens.spacing.regular,
    borderRadius: tokens.borderRadius,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  calorieNumContainer: {
    borderRadius: tokens.borderRadius,
    backgroundColor: tokens.colors.lowElevation,
    alignItems: 'center',
    padding: tokens.spacing.half,
  },
  iconLabelRow: {
    paddingLeft: tokens.spacing.quarter,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelDateColumn: {
    flexDirection: 'column',
  },
  icon: {
    paddingRight: tokens.spacing.half,
  },
  largeText: {
    color: tokens.colors.white,
    fontSize: tokens.fontSizes.LG,
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
