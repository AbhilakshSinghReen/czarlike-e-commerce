import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import CustomButton from "../components/CustomButton";

import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import ReviewRatingCreator from "../components/ReviewRatingCreator";

import {
  containerStyles,
  margins,
  textStyles,
  textColors,
  textInputStyles,
  shapes,
} from "../styles/styles";
import Input from "../components/Input";

export default function PaymentMethod({ navigation, route }) {
  const [firstName, setFirstName] = useState("");

  return (
    <SafeAreaView
      style={[
        containerStyles.backgroundContainer,
        containerStyles.flexColumnCenter,
      ]}
    >
      <View style={containerStyles.topBarView}>
        <View style={containerStyles.topBarSubView}>
          <Icon
            name="long-arrow-left"
            style={margins.marginRight12px}
            size={18}
            color="#9098B1"
          />
          <Text
            style={[
              textStyles.text_Poppins_700_normal_16,
              textColors.text_NeutralDark,
            ]}
          >
            Payment
          </Text>
        </View>
      </View>
      <View style={shapes.topBarBorderView} />
      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={[
          containerStyles.flexColumnStart,
          {
            paddingLeft: 0,
            paddingRight: 0,
          },
        ]}
      >
        <Image
          //style={{ }}
          source={require("../assets/dev-only/payment-method/1.png")}
        />

        <CustomButton
          onClick={() => {
            navigation.navigate("Success");
          }}
          text="Place Order"
        />
      </ScrollView>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
