import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tokens from '../utilities/Tokens';

export interface CardProps {
  title: string;
  onHeaderPress: Function;
  innerContent: ReactNode;
}

function Card(props: CardProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          props.onHeaderPress();
        }}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Icon name="chevron-right" size={36} color={tokens.colors.white} />
      </TouchableOpacity>
      {props.innerContent}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: tokens.fullWidth,
    borderRadius: tokens.borderRadius,
    backgroundColor: tokens.colors.lowElevation,
    padding: tokens.spacing.regular,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: tokens.spacing.half,
  },
  headerText: {
    color: tokens.colors.white,
    fontSize: tokens.fontSizes.MD,
  },
});

export default Card;
