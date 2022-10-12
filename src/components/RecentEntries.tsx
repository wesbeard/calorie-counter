import React, {useContext} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../utilities/AppContext';
import tokens from '../utilities/tokens';
import {CalorieEntry} from '../utilities/Types';

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
    <View style={styles.card}>
      <TouchableOpacity style={styles.header} onPress={() => {}}>
        <Text style={styles.headerText}>Recent Entries</Text>
        <Icon name="chevron-right" size={36} color={tokens.colors.white} />
      </TouchableOpacity>
      <FlatList
        data={calorieEntries}
        renderItem={renderItem}
        persistentScrollbar={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: tokens.fullWidth,
    borderRadius: tokens.borderRadius,
    backgroundColor: tokens.colors.lowElevation,
    padding: tokens.spacing.regular,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: tokens.spacing.half,
  },
  headerText: {
    color: tokens.colors.white,
    fontSize: tokens.fontSizes.MD,
  },
  entryContainer: {
    paddingVertical: tokens.spacing.half,
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
