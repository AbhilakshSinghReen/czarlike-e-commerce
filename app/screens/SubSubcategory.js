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
  ImageBackground,
  Dimensions,
} from "react-native";

import AntDesignIcon from "react-native-vector-icons/AntDesign";

import Grid from "../components/Grid";

import { getAllProductsInSubSubcategory } from "../api/apiServices";

import { convertIntegerToIndianLocaleString } from "../helpers/mathHelpers";

const windowWidth = Dimensions.get("window").width;

export default function SubSubcategory({ navigation, route }) {
  const { subSubcategory } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProductsInSubSubcategoryFromApi = async () => {
    const result = await getAllProductsInSubSubcategory(subSubcategory.id);

    if (!result.error) {
      setProducts(result.data);
    }
  };

  const refresh = async () => {
    setIsLoading(true);

    await getAllProductsInSubSubcategoryFromApi();

    setIsLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  const backButtonOnClick = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerLeftView}>
          <TouchableOpacity
            onPress={() => backButtonOnClick()}
            style={styles.backIcon}
          >
            <AntDesignIcon name="arrowleft" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.pageHeadingText}>{subSubcategory.title}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        <View style={styles.mainHeadingContainer}>
          <ImageBackground
            style={styles.mainHeadingImageBackground}
            source={{ uri: subSubcategory.image }}
            resizeMode="cover"
            imageStyle={{ opacity: 0.5 }}
          >
            <Text style={styles.pageMainHeadingText}>
              {subSubcategory.title}
            </Text>
          </ImageBackground>
        </View>

        <Grid
          data={products}
          numberOfColumns={2}
          renderItem={subSubcategoryRenderItem}
          additionalItemData={{ navigation: navigation }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const subSubcategoryRenderItem = (item, key, { navigation }) => {
  const itemOnPress = () => {
    navigation.navigate("ProductDetails", { product: item });
  };

  const discount =
    Math.round(((item.price - item.offerPrice) / item.price) * 100).toString() +
    "% Off";

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => itemOnPress()}
      key={key}
    >
      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={{ uri: item.image }} />
      </View>

      <Text style={styles.itemNameText} numberOfLines={2}>
        {item.name}
      </Text>

      <Text style={styles.itemOfferPriceText}>
        ₹ {convertIntegerToIndianLocaleString(item.offerPrice)}
      </Text>

      <View style={styles.itemOriginalPriceAndDiscountContainer}>
        <Text style={styles.itemOriginalPriceText}>
          ₹ {convertIntegerToIndianLocaleString(item.price)}
        </Text>
        <Text style={styles.itemDiscountText}>{discount}</Text>
      </View>
    </TouchableOpacity>
  );
};
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
  itemContainer: {
    maxWidth: windowWidth / 3,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    marginRight: 25,

    borderWidth: 1,
    padding: 5,
    borderColor: "#9098B1",
    borderRadius: 5,
  },
  itemImageContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    width: 80,
    height: 80,

    borderRadius: 40,

    backgroundColor: "#eee",

    overflow: "hidden",
  },
  itemImage: {
    width: 80,
    height: 80,
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
  headerLeftView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backIcon: {
    marginRight: 15,
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
  scrollViewStyle: {
    width: "100%",
    flexGrow: 1,
  },
  scrollViewContentContainerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  logInButtonOverrideStyles: {
    marginBottom: 25,
  },
  mainHeadingContainer: {
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
  },
  mainHeadingImageBackground: {
    width: "100%",
    height: 200,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pageMainHeadingText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 50,
    color: "white",
  },

  itemNameText: {
    color: "#223263",
    fontSize: 16,
    fontWeight: "700",
    width: "100%",
    marginTop: 25,
    marginBottom: 15,
  },
  itemOfferPriceText: {
    fontSize: 14,
    fontWeight: "700",
    width: "100%",
    marginBottom: 15,
    color: "orange",
  },
  itemOriginalPriceAndDiscountContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  itemOriginalPriceText: {
    color: "#9098B1",
    fontSize: 10,
    fontWeight: "700",
    width: "40%",
    textDecorationLine: "line-through",
  },
  itemDiscountText: {
    color: "red",
    fontSize: 10,
    fontWeight: "700",
    width: "60%",
    textAlign: "left",
  },
});
