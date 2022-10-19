import React, {useContext} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../utilities/AppContext';
import tokens from '../utilities/Tokens';
import {CalorieEntry} from '../utilities/Types';
import Card from './Card';
import Moment from 'moment';

function RecentEntries() {
  const appContext = useContext(AppContext);
  const calorieEntries = appContext.calorieEntries as CalorieEntry[];

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
            name="clock-outline"
            color={tokens.colors.light}
            size={24}
          />
          <Text style={styles.smallText}>
            {Moment(item.timestamp).format('h:mm A')}
          </Text>
        </View>
        <View style={styles.spacer} />
        <View style={[styles.iconLabelRow]}>
          <Icon
            style={styles.icon}
            name="calendar"
            color={tokens.colors.light}
            size={24}
          />
          <Text style={styles.smallText}>
            {Moment(item.timestamp).format('M/D/YY')}
          </Text>
        </View>
        <View style={styles.spacer} />
      </View>
    );
  };

  return (
    <Card
      title="Recent Entries"
      onHeaderPress={() => {}}
      innerContent={
        calorieEntries.length > 0 ? (
          <FlatList
            horizontal={true}
            style={styles.list}
            data={calorieEntries}
            renderItem={renderItem}
            indicatorStyle="white"
            persistentScrollbar
          />
        ) : (
          <View style={styles.noEntriesContainer}>
            <Icon
              style={styles.alertIcon}
              name="alert-rhombus-outline"
              size={48}
              color={tokens.colors.light}
            />
            <Text style={styles.mediumText}>No Calories Entered Yet</Text>
          </View>
        )
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
    overflow: 'hidden',
    width: 200,
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
    paddingLeft: tokens.spacing.half,
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
  noEntriesContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: tokens.fullWidth,
  },
  alertIcon: {
    marginRight: tokens.spacing.half,
  },
});

export default RecentEntries;
