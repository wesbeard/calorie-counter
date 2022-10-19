import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import tokens from '../utilities/Tokens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RecentEntries from '../components/RecentEntries';
import {NavigationContext} from '@react-navigation/native';
import Card from '../components/Card';
import {ScrollView} from 'react-native-gesture-handler';
import Octagon from '../components/Octagon';

function DashboardScreen() {
  const navigation = React.useContext<any>(NavigationContext);

  let buttonContent = (
    <View style={styles.buttonContent}>
      <Icon name="plus" size={24} color={tokens.colors.white} />
      <Icon name="food-outline" size={36} color={tokens.colors.light} />
    </View>
  );

  return (
    <SafeAreaView>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}>
        <Octagon />
        <View style={styles.spacer} />
        <RecentEntries />
        <View style={styles.spacer} />
        <Card
          title="Weekly Calorie Totals"
          onHeaderPress={() => {}}
          innerContent={<View />}
        />
        <View style={styles.spacer} />
        <Card
          title="BMI Calculator"
          onHeaderPress={() => {}}
          innerContent={<View />}
        />
        <View style={styles.spacer} />
        <Card
          title="My Food"
          onHeaderPress={() => {}}
          innerContent={<View />}
        />
        <View style={styles.spacer} />
        <Card
          title="Weight Tracking"
          onHeaderPress={() => {}}
          innerContent={<View />}
        />
      </ScrollView>
      <View style={styles.FAB}>
        <CustomButton
          contentNode={buttonContent}
          onPress={() => {
            navigation.navigate('New Entry');
          }}
          backgroundColor={tokens.colors.highElevation}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: tokens.spacing.double,
    paddingHorizontal: tokens.spacing.half,
  },
  spacer: {
    height: tokens.spacing.regular,
  },
  totalCaloriesContainer: {
    height: 200,
    marginBottom: tokens.spacing.regular,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FAB: {
    position: 'absolute',
    bottom: tokens.spacing.regular,
    right: tokens.spacing.half,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
