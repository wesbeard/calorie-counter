import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import tokens from '../utilities/Tokens';
import WheelPicker from 'react-native-wheely';

export interface NumberPickerProps {
  updateCallback: Function;
}

function NumberPicker(props: NumberPickerProps) {
  const ARRAY_LENGTH = 300;
  const INTERVAL = 10;
  const DATA = Array.from({length: ARRAY_LENGTH}, (_, i) =>
    ((i + 1) * INTERVAL).toString(),
  );
  const INIT_INDEX = 19; // This is 200 since it starts at zero and is multiplied by 10
  const [selectedIndex, setSelectedIndex] = useState(INIT_INDEX);

  return (
    <WheelPicker
      selectedIndex={selectedIndex}
      options={DATA}
      onChange={index => {
        props.updateCallback(DATA[index]);
        setSelectedIndex(index);
      }}
      selectedIndicatorStyle={styles.selectedIndicator}
      itemTextStyle={styles.itemText}
      containerStyle={styles.container}
      itemHeight={50}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  itemText: {
    fontSize: tokens.fontSizes.MD,
    color: tokens.colors.white,
  },
  selectedIndicator: {
    backgroundColor: tokens.colors.surface,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: tokens.colors.dark,
    borderRadius: 0,
  },
});

export default NumberPicker;
