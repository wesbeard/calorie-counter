/**
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/DashboardScreen';
import tokens from './src/utilities/Tokens';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppContextProvider} from './src/utilities/AppContext';
import NewEntryScreen from './src/screens/NewEntryScreen';
import {en, registerTranslation} from 'react-native-paper-dates';

const Stack = createNativeStackNavigator();
registerTranslation('en', en);

const App = () => {
  return (
    <View style={styles.app}>
      <AppContextProvider>
        <NavigationContainer>
          <StatusBar animated={true} backgroundColor={tokens.colors.surface} />
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
      </AppContextProvider>
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
