import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  textStyles,
  textColors,
  margins,
  containerStyles,
} from "../styles/styles";

export default function ReviewRatingCreator({
  selectedRating,
  setSelectedRating,
}) {
  const handlePress = (event, rating) => {
    setSelectedRating(rating);
  };

  const starGenerator = (rating) => {
    return (
      <TouchableOpacity onPress={(e) => handlePress(e, rating)}>
        <Icon
          name="star"
          style={margins.marginRight10px}
          size={35}
          color={selectedRating >= rating ? "#FFC833" : "#EBF0FF"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        containerStyles.fullWidthHorizontal,
        margins.marginTopAndBottom16px,
      ]}
    >
      {starGenerator(1)}
      {starGenerator(2)}
      {starGenerator(3)}
      {starGenerator(4)}
      {starGenerator(5)}

      <Text
        style={[
          textStyles.text_Poppins_700_normal_14,
          textColors.text_NeutralGrey,
        ]}
      >
        {selectedRating === -1 ? "?" : selectedRating} / 5
      </Text>
    </View>
  );
}
