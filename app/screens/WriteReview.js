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

export default function WriteReview({ product }) {
  const [rating, setRating] = useState(-1);
  const [review, setReview] = useState("");

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
            Write Review
          </Text>
        </View>
      </View>

      <View style={shapes.topBarBorderView} />

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={containerStyles.flexColumnStart}
      >
        <Text
          style={[
            textStyles.text_Poppins_700_normal_14,
            textStyles.text_NeutralDark,
            margins.marginTopAndBottom16px,
          ]}
        >
          Please write Overall level of satisfaction with your shipping /
          Delivery Service
        </Text>

        <ReviewRatingCreator
          selectedRating={rating}
          setSelectedRating={setRating}
        />

        <Text
          style={[
            textStyles.text_Poppins_700_normal_14,
            textColors.text_NeutralDark,
            margins.marginBottom12px,
          ]}
        >
          Write Your Review
        </Text>

        <TextInput
          placeholder="Write your review here"
          style={[
            review === ""
              ? textStyles.text_Poppins_400_normal_12
              : textStyles.text_Poppins_700_normal_12,
            textColors.text_NeutralGrey,
            textInputStyles.writeReviewTextInput,
          ]}
          multiline={true}
          textAlignVertical="top"
          value={review}
          onChangeText={setReview}
        />

        <Text
          style={[
            textStyles.text_Poppins_700_normal_14,
            textColors.text_NeutralDark,
            margins.marginTop24px,
            margins.marginBottom12px,
          ]}
        >
          Add Photo
        </Text>

        <TouchableOpacity
          style={[
            containerStyles.flexCenter72x72Border1px,
            containerStyles.borderColorNeutralGrey,
          ]}
        >
          <AntIcon name="plus" size={25} color="#9098B1" />
        </TouchableOpacity>

        {/*
        <CustomButton
          text="Post Review"
          onClick={() => {}}
          additionalStyles={{}}
        />
        */}
      </ScrollView>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
