import React, {ReactNode, useEffect, useState} from 'react';
import {CalorieEntry} from './Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {areDaysEqual} from './DateFunctions';

const AppContext = React.createContext<any>(undefined);

interface AppContextProps {
  children: ReactNode;
}

export function AppContextProvider(props: AppContextProps) {
  const [calorieEntries, setCalorieEntries] = useState<CalorieEntry[]>([]);
  const [totalCalories, setTotalCalories] = useState<number>(0);
  const [calorieGoal, setCalorieGoal] = useState<number>(2000);

  async function saveEntries(entries: CalorieEntry[]) {
    try {
      const entriesJSON = JSON.stringify(entries);
      await AsyncStorage.setItem('entries', entriesJSON);
    } catch (e) {
      console.log('error storing', e);
    }
  }

  async function loadEntries() {
    try {
      const data = await AsyncStorage.getItem('entries');
      if (data !== null) {
        let parsedData = JSON.parse(data) as CalorieEntry[];
        parsedData.forEach(entry => {
          entry.timestamp = new Date(entry.timestamp);
        });
        setCalorieEntries(parsedData);
      }
    } catch (e) {
      console.log('error loading', e);
    }
  }

  useEffect(() => {
    loadEntries();
  }, []);

  useEffect(() => {
    saveEntries(calorieEntries);

    let total = 0;

    calorieEntries.forEach(entry => {
      if (areDaysEqual(new Date(), entry.timestamp)) {
        total += entry.calories;
      }
    });

    setTotalCalories(total);
  }, [calorieEntries]);

  const appVariables = {
    calorieEntries,
    setCalorieEntries,
    totalCalories,
    setTotalCalories,
    calorieGoal,
    setCalorieGoal,
  };

  return (
    <AppContext.Provider value={appVariables}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
