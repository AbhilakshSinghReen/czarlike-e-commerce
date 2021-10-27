import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function CustomTextInput({
  type,
  name,
  value,
  setValue,
  placeholderText,
  error,
  icon,
  required,
  numberOfLines,
  textColor,
  overrideStyles,
  overrideColors,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const colors = {
    default: overrideColors?.default ? overrideColors.default : "black",
    selected: overrideColors?.selected ? overrideColors.selected : "#F59B2D",
    error: overrideColors?.error ? overrideColors.error : "#FF0000",
    ok: overrideColors?.ok ? overrideColors.ok : "#00FF00",
  };

  const getColor = () => {
    return isFocused
      ? colors.selected
      : value === ""
      ? colors.default
      : error
      ? colors.error
      : colors.ok;
  };

  return (
    <View style={[styles.backgroundView, overrideStyles]}>
      <Text
        style={[
          styles.requiredText,
          {
            color: colors.error,
          },
        ]}
      >
        {required ? "* Required" : null}
      </Text>
      <View
        style={[
          styles.inputContainerView,
          {
            borderColor: getColor(),
          },
        ]}
      >
        {icon(25, getColor())}
        <TextInput
          value={value}
          onChange={setValue}
          placeholder={placeholderText ? placeholderText : `Enter ${name}`}
          placeholderTextColor={textColor}
          secureTextEntry={type === "password" ? !showPassword : false}
          multiline={numberOfLines > 1}
          numberOfLines={numberOfLines}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            {
              borderColor: getColor(),
              color: textColor,
            },
          ]}
        />
        {type === "password" ? (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon name="eye" size={25} color={getColor()} />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text
        style={{
          ...styles.errorText,
          color: colors.error,
        }}
      >
        {error}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",

    width: "100%",

    //marginTop: 15,
    marginBottom: 10,
    //backgroundColor: "black",

    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  inputContainerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    height: 50,

    borderWidth: 1,
    borderRadius: 5,

    marginBottom: 5,

    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  input: {
    flexGrow: 1,

    borderBottomWidth: 1,

    marginLeft: 15,
    marginRight: 15,

    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  requiredText: {
    fontSize: 10,

    width: "100%",

    marginBottom: 5,
  },
  errorText: {
    fontSize: 12,

    width: "100%",
  },
});
