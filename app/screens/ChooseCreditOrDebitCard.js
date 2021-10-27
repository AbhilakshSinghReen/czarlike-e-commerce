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

export default function ChooseCreditOrDebitCard({ product }) {
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
            Choose Card
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          },
        ]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              marginTop: 16,
              marginBottom: 16,
            }}
            source={require("../assets/dev-only/choose-credit-or-debit-card/1.png")}
          />

          <Image
            //style={{ }}
            source={require("../assets/dev-only/choose-credit-or-debit-card/2.png")}
          />
        </View>

        <CustomButton text="Pay $766.86" />
      </ScrollView>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
