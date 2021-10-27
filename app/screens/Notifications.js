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

export default function Notifications({ product }) {
  const [rating, setRating] = useState(-1);
  const [review, setReview] = useState("");

  const [notifications, setNotifications] = useState([]);
  /*
  The notification object right now (for demo) is something like this
  type, number, content
  */

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
            Notifications
          </Text>
        </View>
      </View>

      <View style={shapes.topBarBorderView} />

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={containerStyles.flexColumnStart}
      >
        <Image
          //style={styles.topBarIcon}
          source={require("../assets/dev-only/List.png")}
        />
      </ScrollView>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
