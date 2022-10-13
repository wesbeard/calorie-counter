import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import tokens from '../utilities/Tokens';

export interface CustomButtonProps {
  contentNode: ReactNode;
  onPress: Function;
  backgroundColor: string;
}

function CustomButton(props: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[{backgroundColor: props.backgroundColor}, styles.button]}
      onPress={() => {
        props.onPress();
      }}>
      {props.contentNode}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: tokens.spacing.regular,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: tokens.borderRadius,
  },
});

export default CustomButton;
