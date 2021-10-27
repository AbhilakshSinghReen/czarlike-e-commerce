import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from "react-native";

import CustomButton from "../components/CustomButton";
import FilterButton from "../components/FilterButton";

import ShippingAddressDisplay from "../components/ShippingAddressDisplay";

import {
  containerStyles,
  margins,
  textStyles,
  textColors,
  textInputStyles,
  shapes,
} from "../styles/styles";

export default function ShipTo({ navigation, route }) {
  const [selectedShippingAddressId, setSelectedShippingAddressId] = useState(1);
  const [allShippingAddresses, setAllShippingAddresses] = useState([
    {
      id: 1,
      name: "Priscekila",
      address:
        "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
      contactNumber: "+99 1234567890",
    },
    {
      id: 2,
      name: "Ahmad Khaidir",
      address:
        "3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States",
      contactNumber: "+99 1234567890",
    },
  ]);

  return (
    <SafeAreaView
      style={[
        containerStyles.backgroundContainer,
        containerStyles.flexColumnCenter,
      ]}
    >
      <View style={containerStyles.topBarView}>
        <View style={containerStyles.topBarSubView}>
          <Text
            style={[
              textStyles.text_Poppins_700_normal_16,
              textColors.text_NeutralDark,
            ]}
          >
            Ship To
          </Text>
        </View>
      </View>

      <View style={shapes.topBarBorderView} />

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={containerStyles.flexColumnStart}
      >
        <ShippingAddressDisplay
          shippingAddress={allShippingAddresses[0]}
          selected={true}
        />

        <ShippingAddressDisplay
          shippingAddress={allShippingAddresses[1]}
          selected={false}
        />
        <View style={margins.marginView70pxHeight} />
        <CustomButton
          onClick={() => {
            navigation.navigate("Add Location");
          }}
          text="Add A New Location"
          overrideStyles={{
            marginBottom: 25,
            height: 35,
          }}
          overrideTextStyles={{
            fontSize: 12,
          }}
        />
        <CustomButton
          onClick={() => {
            navigation.navigate("Payment Method");
          }}
          text="Next"
        />
      </ScrollView>

      <View
        style={[
          shapes.homeIndicator,
          {
            marginTop: 8,
          },
        ]}
      />
    </SafeAreaView>
  );
}
