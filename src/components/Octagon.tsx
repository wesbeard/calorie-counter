import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Defs, LinearGradient, Path, Stop, Svg} from 'react-native-svg';
import AppContext from '../utilities/AppContext';
import tokens from '../utilities/Tokens';

// Points for a 300x300 SVG Octagon:
// 150 0, 250 50, 300 150, 250 250, 150 300, 50 250, 0 150, 50 50

function Octagon() {
  const appContext = useContext(AppContext);
  const totalCalories = appContext.totalCalories;
  const calorieGoal = appContext.calorieGoal;

  const path =
    'M116.346,2.26126C121.247,0.231377,126.753,0.231377,131.654,2.26126L204.735,32.5324C209.635,34.5623,213.529,38.4558,215.559,43.3563L245.83,116.437C247.86,121.338,247.86,126.844,245.83,131.745L215.559,204.826C213.529,209.726,209.635,213.62,204.735,215.65L131.654,245.921C126.753,247.951,121.247,247.951,116.346,245.921L43.2653,215.65C38.3648,213.62,34.4713,209.726,32.4414,204.826L2.17025,131.745C0.140374,126.844,0.140374,121.338,2.17025,116.437L32.4414,43.3563C34.4713,38.4558,38.3648,34.5623,43.2653,32.5324L116.346,2.26126Z';

  return (
    <View style={styles.container}>
      <Svg height={260} width={260} viewBox="-10 -10 270 270">
        <Defs>
          <LinearGradient id="grad" x1="100%" y1="0%" x2="0%" y2="0%">
            <Stop offset="0" stopColor={tokens.colors.white} stopOpacity="1" />
            <Stop offset="1" stopColor={tokens.colors.dark} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Path d={path} strokeWidth={16} stroke="url(#grad)" />
      </Svg>
      <View style={styles.totalCaloriesContainer}>
        <Text style={styles.smallText}>Todays Calories</Text>
        <View style={styles.spacer} />
        <Text style={styles.largeText}>{totalCalories}</Text>
        <View style={styles.spacer} />
        <Text style={styles.extraSmallText}>
          {Math.round((totalCalories / calorieGoal) * 100 * 100) / 100}% of
        </Text>
        <Text style={styles.extraSmallText}>{calorieGoal} Daily</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    width: tokens.fullWidth,
    alignItems: 'center',
  },
  totalCaloriesContainer: {
    position: 'absolute',
    alignSelf: 'center',
    height: 260,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    height: tokens.spacing.half,
  },
  extraSmallText: {
    fontSize: tokens.fontSizes.XS,
    color: tokens.colors.white,
  },
  smallText: {
    fontSize: tokens.fontSizes.SM,
    color: tokens.colors.white,
  },
  mediumText: {
    fontSize: tokens.fontSizes.MD,
    color: tokens.colors.white,
  },
  largeText: {
    fontSize: tokens.fontSizes.XL,
    color: tokens.colors.white,
  },
});

export default Octagon;
