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
import {DefaultTheme, MD2DarkTheme, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import {NavigationContext} from '@react-navigation/native';
import NumberPicker from '../components/NumberPicker';
import {DatePickerModal, TimePickerModal} from 'react-native-paper-dates';
import {Provider as PaperProvider} from 'react-native-paper';

function DashboardScreen() {
  const navigation = useContext<any>(NavigationContext);
  // const [number, setNumber] = useState<number>();
  // const [label, setLabel] = useState<string | undefined>();
  // const [timestamp, setTimestamp] = useState<Date | undefined>(new Date());
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const theme = {
    roundness: 20,
    version: 3,
    dark: true,
    colors: {
      ...MD2DarkTheme.colors,
      primary: tokens.colors.medium,
      surface: tokens.colors.surface,
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

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.row}>
          <NumberPicker />
          <Text style={styles.caloriesText}>Calories</Text>
        </View>
        <View style={styles.inputIconRow}>
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Entry Name"
            theme={inputTheme}
            selectionColor={tokens.colors.light}
            onChangeText={() => {}}
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
            onConfirm={() => {
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
            onConfirm={() => {
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
          onPress={() => {
            navigation.pop();
          }}
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

export default DashboardScreen;
