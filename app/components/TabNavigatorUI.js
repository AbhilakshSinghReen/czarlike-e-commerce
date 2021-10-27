import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  tabNavigatorUiContainer: {
    width: "100%",
    height: 93,
  },
});

export default function TabNavigatorUI() {
  return (
    <View style={styles.tabNavigatorUiContainer}>
      <Image
        style={[styles.signUpScreenLogoImage]}
        source={require("../assets/dev-only/tab-bar.png")}
      />
    </View>
  );
}
