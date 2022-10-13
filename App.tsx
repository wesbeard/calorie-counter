/**
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/DashboardScreen';
import tokens from './src/utilities/Tokens';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppContext from './src/utilities/AppContext';
import {CalorieEntry} from './src/utilities/Types';
import {TEST_DATA} from './src/utilities/TestData';
import NewEntryScreen from './src/screens/NewEntryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [calorieEntries, setCalorieEntries] =
    useState<CalorieEntry[]>(TEST_DATA);
  const [totalCalories, setTotalCalories] = useState(1000);
  const [calorieGoal, setCalorieGoal] = useState(2000);
  const appVariables = {
    calorieEntries,
    setCalorieEntries,
    totalCalories,
    setTotalCalories,
    calorieGoal,
    setCalorieGoal,
  };

  return (
    <View style={styles.app}>
      <AppContext.Provider value={appVariables}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              title: '',
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: tokens.colors.surface,
              },
              headerStyle: {
                backgroundColor: tokens.colors.surface,
              },
            }}>
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                headerLeft: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <Icon name="menu" size={36} color={tokens.colors.white} />
                  </TouchableOpacity>
                ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => {}}>
                    <Icon
                      name="account-circle-outline"
                      size={36}
                      color={tokens.colors.light}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen
              name="New Entry"
              component={NewEntryScreen}
              options={{headerTintColor: tokens.colors.white}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    height: tokens.fullHeight,
    width: tokens.fullWidth,
    backgroundColor: tokens.colors.surface,
  },
});

export default App;
