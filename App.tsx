/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from './src/screens/DashboardScreen';
import tokens from './src/utilities/tokens';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: '',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
