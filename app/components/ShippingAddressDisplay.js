import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CustomButton from "./CustomButton";
import { textStyles, textColors, margins } from "../styles/styles";
import AntIcon from "react-native-vector-icons/AntDesign";

const styles = StyleSheet.create({
  bgView: {
    borderWidth: 1,
    padding: 24,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    marginTop:16,
  },
  bgViewSelected: {
    borderColor: "#F59B2D",
  },
});

export default function ShippingAddressDisplay({
  shippingAddress,
  selected,
  onSelect,
}) {
  return (
    <View style={[styles.bgView, selected ? styles.bgViewSelected : null]}>
      <Text
        style={[
          textStyles.text_Poppins_700_normal_14,
          textColors.text_NeutralDark,
        ]}
      >
        {shippingAddress.name}
      </Text>
      <Text
        style={[
          textStyles.text_Poppins_400_normal_12,
          textColors.text_NeutralGrey,
          margins.marginTopAndBottom16px,
        ]}
      >
        {shippingAddress.address}
      </Text>
      <Text
        style={[
          textStyles.text_Poppins_400_normal_12,
          textColors.text_NeutralGrey,
          margins.marginBottom16px,
        ]}
      >
        {shippingAddress.contactNumber}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <CustomButton
          text="Edit"
          overrideStyles={{
            width: "auto",
            paddingLeft: 24,
            paddingRight: 24,
            marginRight: 30,
          }}
        />
        <TouchableOpacity>
          <AntIcon name="delete" size={18} color="#9098B1" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
