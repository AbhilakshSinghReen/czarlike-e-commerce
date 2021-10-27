import React from "react";
import { Image, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  splashScreenContainer: {
    backgroundColor: "#F59B2D",

    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  splashScreenImageContainer: {
    backgroundColor: "#FFFFFF",

    width: 88,
    height: 88,

    borderRadius: 16,
  },
  splashScreenImage: {
    width: 81,
    height: 78,
  },
  homeIndicator: {
    backgroundColor: "#FFFFFF",

    width: 134,
    height: 5,

    borderRadius: 100,

    position: "absolute",
    bottom: 8,
  },
});

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.splashScreenContainer}>
      <StatusBar
        backgroundColor="#F59B2D"
        barStyle="light-content" // Here is where you change the font-color
      />
      <View style={styles.splashScreenImageContainer}>
        <Image
          style={styles.splashScreenImage}
          source={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}
