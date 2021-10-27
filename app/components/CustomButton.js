import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#F59B2D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 25.2,
    letterSpacing: 0.5,
  },
});

export default function CustomButton({
  text,
  onClick,
  additionalStyles,
  overrideStyles,
  overrideTextStyles,
  disabled,
}) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.button, overrideStyles]}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, overrideTextStyles]}>{text}</Text>
    </TouchableOpacity>
  );
}
