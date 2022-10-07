import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import tokens from '../utilities/tokens';

function DashboardScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.mediumText}>Todays Calories</Text>
        <Text style={styles.extraLargeText}>1020</Text>
        <Text style={styles.smallText}>51% of</Text>
        <Text style={styles.smallText}>2000 Daily</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: tokens.spacing.regular,
    width: tokens.fullWidth,
    height: tokens.fullHeight,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: tokens.fontSizes.SM,
    color: tokens.colors.white,
  },
  mediumText: {
    fontSize: tokens.fontSizes.MD,
    color: tokens.colors.white,
  },
  extraLargeText: {
    fontSize: tokens.fontSizes.XL,
    color: tokens.colors.white,
  },
});

export default DashboardScreen;
