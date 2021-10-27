import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FontistoIcon from "react-native-vector-icons/Fontisto";

const styles = StyleSheet.create({
  authInputView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    height: 48,

    borderRadius: 5,

    borderWidth: 1,
    borderColor: "#EBF0FF",
    width: "100%",
    paddingLeft: 18,
    paddingRight: 16,

    marginBottom: 8,
  },
  authInput: {
    color: "#9098B1",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 21.6,
    letterSpacing: 0.5,
    flexGrow: 100,
    height: 22,
    marginLeft: 12,
    height: "100%",
  },
  authInputIconImage: {},
});

export default function Input({
  type,
  value,
  setValue,
  placeholderText,
  icons,
  name,
  additionalStyles,
  overrideStyles,
  error,
  autoFocus,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const getIcon = () => {
    switch (name) {
      case "search":
        return (
          <AntIcon
            name="search1"
            size={25}
            color={isFocused ? "#F59B2D" : "#EBF0FF"}
          />
        );
      case "email":
        return (
          <EvilIcon
            name="envelope"
            size={25}
            color={isFocused ? "#F59B2D" : "#EBF0FF"}
          />
        );
      case "password":
        return (
          <EvilIcon
            name="lock"
            size={25}
            color={isFocused ? "#F59B2D" : "#EBF0FF"}
          />
        );
      case "full name":
        return (
          <FontistoIcon
            name="person"
            size={25}
            color={isFocused ? "#F59B2D" : "#EBF0FF"}
          />
        );
      default:
        <Image
          style={styles.authInputIconImage}
          source={require("../assets/icons/lock.png")}
        />;
    }
  };

  return (
    <View
      style={[
        styles.authInputView,
        {
          borderColor: error ? "#FB7181" : isFocused ? "#F59B2D" : "#EBF0FF",
        },
        additionalStyles,
        overrideStyles,
      ]}
    >
      {getIcon()}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.authInput]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholderText}
        secureTextEntry={type === "password"}
        autoFocus={autoFocus}
      />
    </View>
  );
}
