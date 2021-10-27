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
import EntypoIcon from "react-native-vector-icons/Entypo";

export default function Success({ navigation, route }) {
  const [firstName, setFirstName] = useState("");

  return (
    <SafeAreaView
      style={[
        containerStyles.backgroundContainer,
        containerStyles.flexColumnCenter,
        {
          justifyContent: "center",
        },
      ]}
    >
      <View
        style={{
          flexGrow: 100,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={[containerStyles.flexFullWidthColumnCenterCenter]}>
          <EntypoIcon name="check" size={100} color="#F59B2D" />
          <Text
            style={[
              textStyles.text_Poppins_700_normal_24,
              textColors.text_NeutralDark,
            ]}
          >
            Success
          </Text>
          <Text
            style={[
              textStyles.text_Poppins_400_normal_12,
              textColors.text_NeutralGrey,
            ]}
          >
            thank you for shopping using lafyuu
          </Text>

          <CustomButton
            text="Back to Order"
            onClick={() => {
              navigation.navigate("ProductDetails", {
                product: {
                  image:
                    "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
                  name: "iPhone 11",
                  price: "$299,43",
                  originalPrice: "$534,33",
                  discount: "24% Off",
                },
              });
            }}
            overrideStyles={margins.marginTopAndBottom16px}
          />
        </View>
      </View>
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
