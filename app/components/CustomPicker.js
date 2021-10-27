import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function CustomPicker({
  items,
  selectedValue,
  setSelectedValue,
  disabled,
}) {
  return (
    <View style={styles.backgroundContainer}>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        enabled={!disabled}
      >
        {items.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 5,
  },
  picker: {
    width: "100%",
    height: 50,
  },
});
