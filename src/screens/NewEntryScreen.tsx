import React, {useState} from 'react';
import {useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import tokens from '../utilities/Tokens';
import {
  DefaultTheme,
  MD2DarkTheme,
  MD3DarkTheme,
  TextInput,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import {NavigationContext} from '@react-navigation/native';
import NumberPicker from '../components/NumberPicker';
import {DatePickerModal, TimePickerModal} from 'react-native-paper-dates';
import {Provider as PaperProvider} from 'react-native-paper';
import Moment from 'moment';
import AppContext from '../utilities/AppContext';

function NewEntryScreen() {
  const navigation = useContext<any>(NavigationContext);
  const appContext = useContext(AppContext);
  const [calories, setCalories] = useState<number>(200);
  const [label, setLabel] = useState<string | undefined>();
  const [time, setTime] = useState<Date>();
  const [date, setDate] = useState<Date>();
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const theme = {
    ...MD3DarkTheme,
    roundness: 20,
    dark: true,
    colors: {
      ...MD2DarkTheme.colors,
      primary: tokens.colors.dark,
    },
  };

  const inputTheme = {
    roundness: tokens.borderRadius / 2,
    colors: {
      ...DefaultTheme.colors,
      primary: tokens.colors.white,
      onSurface: tokens.colors.white,
      secondary: tokens.colors.white,
      onSurfaceVariant: tokens.colors.white,
    },
  };

  function onSubmit() {
    let entries = appContext.calorieEntries;

    let finalDate = date === undefined ? new Date() : date;
    let finalTime = time === undefined ? new Date() : time;

    let timestamp = finalDate.setTime(finalTime.getTime());

    let newEntry = [
      {
        key: entries.length,
        calories: calories,
        label: label,
        timestamp: timestamp,
        icon: 'food-outline',
      },
    ];

    entries = newEntry.concat(entries);
    appContext.setCalorieEntries(entries);
    appContext.setTotalCalories(
      (appContext.totalCalories as number) + calories,
    );
    navigation.pop();
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.row}>
          <NumberPicker updateCallback={setCalories} />
          <Text style={styles.caloriesText}>Calories</Text>
        </View>
        <View style={styles.inputIconRow}>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Entry Name"
            theme={inputTheme}
            selectionColor={tokens.colors.light}
            onChangeText={text => {
              setLabel(text);
            }}
            value={label}
          />
          <Icon
            name="drive-file-rename-outline"
            color={tokens.colors.white}
            size={36}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setTimePickerOpen(true);
          }}
          style={styles.inputIconRow}>
          <TimePickerModal
            visible={timePickerOpen}
            onDismiss={() => {
              setTimePickerOpen(false);
            }}
            onConfirm={props => {
              const newTime = new Date();
              newTime.setHours(props.hours);
              newTime.setMinutes(props.minutes);
              setTime(newTime);
              setTimePickerOpen(false);
            }}
            hours={12}
            minutes={0}
            label="Select time"
            uppercase={false}
            cancelLabel="Cancel"
            confirmLabel="Ok"
            animationType="fade"
            locale="en"
          />
          <TextInput
            pointerEvents="none"
            editable={false}
            mode="outlined"
            style={styles.input}
            label="Time"
            theme={inputTheme}
            value={time === undefined ? 'Now' : Moment(time).format('h:mm A')}
          />
          <Icon name="schedule" color={tokens.colors.white} size={36} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputIconRow}
          onPress={() => {
            setDatePickerOpen(true);
          }}>
          <DatePickerModal
            locale="en"
            mode="single"
            visible={datePickerOpen}
            onDismiss={() => {
              setDatePickerOpen(false);
            }}
            onConfirm={props => {
              setDate(props.date);
              setDatePickerOpen(false);
            }}
          />
          <TextInput
            pointerEvents="none"
            editable={false}
            mode="outlined"
            style={styles.input}
            label="Date"
            theme={inputTheme}
            value={date === undefined ? 'Today' : date.toString()}
          />
          <Icon name="calendar-today" color={tokens.colors.white} size={36} />
        </TouchableOpacity>
        <CustomButton
          contentNode={
            <View style={styles.row}>
              <Icon name="playlist-add" color={tokens.colors.white} size={24} />
              <Text style={styles.buttonText}>Add Entry</Text>
            </View>
          }
          onPress={onSubmit}
          backgroundColor={tokens.colors.highElevation}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    paddingHorizontal: tokens.spacing.regular,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caloriesText: {
    marginLeft: tokens.spacing.half,
    color: tokens.colors.white,
    fontSize: tokens.fontSizes.MD,
  },
  buttonText: {
    fontSize: tokens.fontSizes.SM,
    color: tokens.colors.white,
    marginLeft: tokens.spacing.quarter,
  },
  inputIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.regular,
  },
  input: {
    marginRight: tokens.spacing.half,
    height: 50,
    width: 200,
    backgroundColor: tokens.colors.surface,
  },
});

export default NewEntryScreen;
