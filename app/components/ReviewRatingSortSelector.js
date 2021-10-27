import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//const myIcon = <Icon name="rocket" size={30} color="#900" />;

const styles = StyleSheet.create({
  text_Poppins_400_normal_12: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  text_Poppins_700_normal_12: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.5,
  },
  buttonBase: {
    backgroundColor: "#FFFFFF",
    borderColor: "#EBF0FF",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  buttonTextBase: {
    color: "#9098B1",
  },
  buttonIconBase: {
    marginRight: 10,
  },
  buttonSelected: {
    backgroundColor: "#F59B2D1A",
    borderColor: "#F59B2D1A",
  },
  buttonTextSelected: {
    color: "#40BFFF",
  },
});

export default function ReviewRatingSortSelector({
  selectedRating,
  setSelectedRating,
}) {
  //-1=All, 1=1, 2=2, ...
  const [currentlySelected, setCurrentlySelected] = useState(-1);

  const handlePress = (event, rating) => {
    setCurrentlySelected(rating);
  };

  const starGenerator = (rating) => {
    return (
      <TouchableOpacity
        onPress={(e) => handlePress(e, rating)}
        style={[
          styles.buttonBase,
          currentlySelected === rating ? styles.buttonSelected : null,
        ]}
      >
        <Icon
          name="star"
          style={styles.buttonIconBase}
          size={18}
          color="#FFC833"
        />
        <Text
          style={[
            styles.buttonTextBase,
            currentlySelected === rating
              ? styles.text_Poppins_700_normal_12
              : styles.text_Poppins_400_normal_12,
            currentlySelected === rating ? styles.buttonTextSelected : null,
          ]}
        >
          {rating}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 50,
        marginBottom: 50,
      }}
      contentContainerStyle={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={(e) => handlePress(e, -1)}
        style={[
          styles.buttonBase,
          currentlySelected === -1 ? styles.buttonSelected : null,
        ]}
      >
        <Text
          style={[
            styles.buttonTextBase,
            currentlySelected === -1
              ? styles.text_Poppins_700_normal_12
              : styles.text_Poppins_400_normal_12,
            currentlySelected === -1 ? styles.buttonTextSelected : null,
          ]}
        >
          All Reviews
        </Text>
      </TouchableOpacity>

      {starGenerator(1)}
      {starGenerator(2)}
      {starGenerator(3)}
      {starGenerator(4)}
      {starGenerator(5)}
    </ScrollView>
  );
}
