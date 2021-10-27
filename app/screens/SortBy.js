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

export default function SortBy({ navigation, route }) {
  const { onSortingMethodChange } = route.params;

  const availableSortingMethods = [
    "Best Match",
    "Time: ending soonest",
    "Time: newly listed",
    "Price + Shipping: lowest first",
    "Price + Shipping: highest first",
    "Distance: nearest first",
  ];

  const [selectedSortingMethod, setSelectedSortingMethod] =
    useState("Best Match");

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
            Sort By
          </Text>
        </View>
      </View>

      <View style={shapes.topBarBorderView} />

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={containerStyles.flexColumnStart}
      >
        {availableSortingMethods.map((sortingMethod) => (
          <TouchableHighlight
            style={[containerStyles.sortBySelectorContainer]}
            key={availableSortingMethods.indexOf(sortingMethod)}
            underlayColor="#EBF0FF"
            activeOpacity={1}
            onPress={() => {
              setSelectedSortingMethod(sortingMethod);
              onSortingMethodChange(sortingMethod);
            }}
          >
            <Text
              style={[
                textStyles.text_Poppins_700_normal_12,
                sortingMethod === selectedSortingMethod
                  ? textColors.text_Orange
                  : textColors.text_NeutralDark,
              ]}
            >
              {sortingMethod}
            </Text>
          </TouchableHighlight>
        ))}
      </ScrollView>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
