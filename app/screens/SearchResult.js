import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

import CustomButton from "../components/CustomButton";

import FaIcon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";
import ReviewRatingCreator from "../components/ReviewRatingCreator";

import {
  containerStyles,
  margins,
  textStyles,
  textColors,
  textInputStyles,
  shapes,
  paddings,
} from "../styles/styles";

import Input from "../components/Input";

import { availableSortingMethods } from "../constants/constants";

import { getAllProductSummaries } from "../api/apiServices";

import { convertIntegerToIndianLocaleString } from "../helpers/mathHelpers";

const windowWidth = Dimensions.get("window").width;

const itemImageWidthCoefficient = 0.2;
const itemNameWidthCoefficient = 0.4;
const itemPriceWidthCoefficient = 0.2;
const itemCrossButtonWidthCoefficient = 0.1;

export default function SearchResult({ navigation, route }) {
  const [allProductsSummaries, setAllProductsSummaries] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [selectedSortingMethod, setSelectedSortingMethod] = useState(
    availableSortingMethods[0]
  );

  const itemOnPress = (item) => {
    navigation.navigate("ProductDetails", { product: item });
  };

  const getAllProductSummariesFromApi = async () => {
    const result = await getAllProductSummaries();

    if (!result.error) {
      setAllProductsSummaries([...result.data, ...result.data]);
      console.log("Products: ", result.data.length);
    }
  };

  const refresh = async () => {
    await getAllProductSummariesFromApi();
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    const itemsOfInterest = allProductsSummaries.filter((item) =>
      item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );

    setSearchResults(itemsOfInterest);
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Input
          type="text"
          value={searchQuery}
          setValue={setSearchQuery}
          placeholderText="Search Products"
          icons={[]}
          additionalStyles={{}}
          error={false}
          name="search"
          overrideStyles={{
            width: "auto",
            flexGrow: 5,
          }}
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Sort By", {
              onSortingMethodChange: setSelectedSortingMethod,
            });
          }}
        >
          <FaIcon
            style={margins.marginLeftAndRight20px}
            name="sort-amount-desc"
            size={25}
            color="#9098B1"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Filter", {
              //onSortingMethodChange: setSelectedSortingMethod,
            });
          }}
        >
          <AntIcon name="filter" size={25} color="#F59B2D" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={containerStyles.flexColumnStart}
      >
        {searchResults.map((item, index) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => itemOnPress(item)}
            key={index}
          >
            <Image style={styles.itemImage} source={{ uri: item.image }} />

            <Text style={styles.itemNameText} numberOfLines={3}>
              {item.name}
            </Text>

            <Text style={styles.itemPriceText} numberOfLines={3}>
              ₹ {convertIntegerToIndianLocaleString(item.price)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#FFFFFF",

    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    paddingBottom: 28,
  },
  topBarLeftView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  scrollViewStyle: {
    width: "100%",
    flexGrow: 1,

    marginBottom: 15,
  },
  scrollViewContentContainerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  pageHeadingText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,

    color: "#223263",
  },
  totalView: {
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },
  totalLabelText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#223263",
  },
  totalText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#223263",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    //height: 150,

    backgroundColor: "#fafafa",

    borderWidth: 1,
    borderRadius: 5,

    marginBottom: 15,

    padding: 5,
  },
  itemImage: {
    width: windowWidth * itemImageWidthCoefficient,
    height: windowWidth * itemImageWidthCoefficient,
  },
  itemNameText: {
    width: windowWidth * itemNameWidthCoefficient,

    textAlign: "center",

    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 16,

    textAlign: "left",

    paddingLeft: 5,
  },
  itemPriceText: {
    width: windowWidth * itemPriceWidthCoefficient,

    paddingLeft: 5,
  },
  itemCrossButtonContainer: {
    width: windowWidth * itemCrossButtonWidthCoefficient,
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemCrossButton: {
    backgroundColor: "black",

    borderRadius: 10,
  },
  mainButtonOverride: {
    marginBottom: 15,
  },
});
