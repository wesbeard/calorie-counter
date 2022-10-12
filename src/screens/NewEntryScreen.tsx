import React, {useState} from 'react';
import {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppContext from '../utilities/AppContext';
import tokens from '../utilities/tokens';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import {NavigationContext} from '@react-navigation/native';
import NumberPicker from '../components/NumberPicker';

function DashboardScreen() {
  const navigation = useContext<any>(NavigationContext);
  const appContext = useContext(AppContext);
  const [number, setNumber] = useState<number | undefined>();
  const [label, setLabel] = useState<string | undefined>();
  const [timestamp, setTimestamp] = useState<Date | undefined>(new Date());

  return (
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
          theme={{
            roundness: tokens.borderRadius / 2,
            colors: {
              primary: tokens.colors.white,
              onSurface: tokens.colors.white,
            },
          }}
          selectionColor={tokens.colors.light}
          onChangeText={setLabel}
        />
        <Icon
          name="drive-file-rename-outline"
          color={tokens.colors.white}
          size={36}
        />
      </View>
      <View style={styles.inputIconRow}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Time"
          theme={{
            roundness: tokens.borderRadius / 2,
            colors: {
              primary: tokens.colors.white,
              onSurface: tokens.colors.white,
            },
          }}
          selectionColor={tokens.colors.light}
          onChangeText={() => {}}
        />
        <Icon name="schedule" color={tokens.colors.white} size={36} />
      </View>
      <View style={styles.inputIconRow}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Date"
          theme={{
            roundness: tokens.borderRadius / 2,
            colors: {
              primary: tokens.colors.white,
              onSurface: tokens.colors.white,
            },
          }}
          selectionColor={tokens.colors.light}
          onChangeText={() => {}}
        />
        <Icon name="calendar-today" color={tokens.colors.white} size={36} />
      </View>
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
    height: 40,
    width: 200,
    backgroundColor: tokens.colors.surface,
  },
});

export default DashboardScreen;
