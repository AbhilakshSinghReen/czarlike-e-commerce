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

export default function AddLocation({ product }) {
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
            Add Location
          </Text>
        </View>
      </View>

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={[
          containerStyles.flexColumnStart,
          {
            paddingLeft: 38,
            paddingRight: 38,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          First Name
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your first name"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />

        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          Last Name
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your last name"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />

        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          Phone Number
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your phone number"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />

        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          Email
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your email"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />

        <CustomButton
          text="Search Your Address"
          overrideStyles={{
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          Country
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your country"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />
        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          State
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your state"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />
        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          City
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your city"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />
        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          Street Name
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your street name"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />
        <Text
          style={{
            fontSize: 15,
            width: "100%",
            lineHeight: 17.58,
            letterSpacing: -0.3,
            fontWeight: "400",
            fontStyle: "normal",
            color: "#4D4D4D",
          }}
        >
          Zip code
        </Text>
        <Input
          type="text"
          value={firstName}
          setValue={setFirstName}
          placeholderText="Enter your zip code"
          icons={[]}
          overrideStyles={{
            marginTop: 4,
            marginBottom: 16,
          }}
          error={false}
        />

        <CustomButton text="Continue This Address" />
      </ScrollView>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
