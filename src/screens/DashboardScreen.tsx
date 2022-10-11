import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import tokens from '../utilities/tokens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from '../utilities/AppContext';
import RecentEntries from '../components/RecentEntries';
import {NavigationContext} from '@react-navigation/native';

function DashboardScreen() {
  const navigation = React.useContext<any>(NavigationContext);
  const appContext = useContext(AppContext);
  const totalCalories = appContext.totalCalories;
  const calorieGoal = appContext.calorieGoal;

  let buttonContent = (
    <View style={styles.buttonContent}>
      <Icon name="plus" size={24} color={tokens.colors.white} />
      <Icon name="food-outline" size={36} color={tokens.colors.light} />
    </View>
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.totalCaloriesContainer}>
          <Text style={styles.mediumText}>Todays Calories</Text>
          <Text style={styles.extraLargeText}>{totalCalories}</Text>
          <Text style={styles.smallText}>51% of</Text>
          <Text style={styles.smallText}>{calorieGoal} Daily</Text>
        </View>
        <RecentEntries />
        <View style={styles.FAB}>
          <CustomButton
            contentNode={buttonContent}
            onPress={() => {
              navigation.navigate('New Entry');
            }}
            backgroundColor={tokens.colors.highElevation}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  totalCaloriesContainer: {
    marginBottom: tokens.spacing.regular,
    flexDirection: 'column',
    alignItems: 'center',
  },
  FAB: {
    position: 'absolute',
    bottom: tokens.spacing.half,
    right: tokens.spacing.half,
  },
  container: {
    paddingHorizontal: tokens.spacing.half,
    width: tokens.fullWidth,
    height: tokens.fullHeight,
    flexDirection: 'column',
    alignItems: 'center',
  },
  smallText: {
    fontSize: tokens.fontSizes.SM,
    color: tokens.colors.white,
  },
  mediumText: {
    fontSize: tokens.fontSizes.MD,
    color: tokens.colors.white,
  },
  extraLargeText: {
    fontSize: tokens.fontSizes.XL,
    color: tokens.colors.white,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
