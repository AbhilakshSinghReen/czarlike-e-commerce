import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

import CustomButton from "../components/CustomButton";
import ReviewRatingSortSelector from "../components/ReviewRatingSortSelector";

import {
  containerStyles,
  margins,
  textStyles,
  textColors,
} from "../styles/styles";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#FFFFFF",

    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    paddingLeft: 16,
    paddingRight: 16,
  },

  productDetailsView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 50,
  },
  categoryTopBarView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 44,
    paddingBottom: 28,
  },
  topBarIcon: {
    marginRight: 12,
  },
  topBarBorderView: {
    width: "100%",
    borderBottomColor: "#EBF0FF",
    borderBottomWidth: 1,
    marginTop: 16,
  },
  mainContentView: {
    //borderWidth: 1,
    flexGrow: 1,
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  mainContentScrollViewContainerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
  },
  homeIndicator: {
    backgroundColor: "#D1D6E8",

    width: 134,
    height: 5,

    borderRadius: 100,

    position: "absolute",
    bottom: 8,
    opacity: 50,
    marginTop: 50,
  },
});

export default function ProductReviews({ navigation, route }) {
  const { product } = route.params;

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.categoryTopBarView}>
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
            5 Reviews
          </Text>
        </View>
      </View>
      <View style={styles.topBarBorderView} />

      <ScrollView
        style={{
          width: "100%",
        }}
        contentContainerStyle={styles.productDetailsView}
      >
        <ReviewRatingSortSelector />
        <Image
          style={{
            width: "100%",
            marginBottom: 30,
          }}
          source={require("../assets/dev-only/Review.png")}
        />

        <CustomButton
          text="Write Review"
          onClick={() => {
            navigation.navigate("WriteReview", { product: product });
          }}
          additionalStyles={{}}
        />
        <View style={styles.homeIndicator} />
      </ScrollView>
    </SafeAreaView>
  );
}
