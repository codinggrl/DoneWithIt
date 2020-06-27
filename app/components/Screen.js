import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView } from "react-native";

// we want to use the screen commponent exatly as SafeAreView comp.
// so we should be able to use children props
function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

// all of our details of putting the content inside the safe area view
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
