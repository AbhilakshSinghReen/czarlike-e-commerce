import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { textColors, textStyles } from "../styles/styles";

const styles = StyleSheet.create({
  button: {
    width: "auto",
    height: 50,
    borderRadius: 5,
    padding: 16,
    margin: 8,
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
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
  buttonSelected: {
    backgroundColor: "#F59B2D0F",
    borderColor: "#F59B2D0F",
  },
});

export default function FilterButton({
  text,
  selected,
  setSelected,
  overrideStyles,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        selected ? styles.buttonSelected : null,
        overrideStyles,
      ]}
      onPress={() => {
        setSelected(!selected);
      }}
    >
      <Text
        style={
          selected
            ? [textStyles.text_Poppins_700_normal_12, textColors.text_Orange]
            : [
                textStyles.text_Poppins_400_normal_12,
                textColors.text_NeutralGrey,
              ]
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
