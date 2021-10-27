import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { getDealsOfTheDay } from "../api/apiServices";

import Grid from "../components/Grid";

import { convertIntegerToIndianLocaleString } from "../helpers/mathHelpers";

export default function DealsOfTheDayGridDisplayer({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  const [dealsOfTheDayData, setDealsOfTheDayData] = useState([]);

  const refresh = async () => {
    setIsLoading(true);
    const result = await getDealsOfTheDay();

    if (!result.error) {
      setDealsOfTheDayData(result.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Grid
        data={dealsOfTheDayData}
        numberOfColumns={2}
        renderItem={dealsOfTheDayRenderItem}
        additionalItemData={{ navigation: navigation }}
      />
    </View>
  );
}

const dealsOfTheDayRenderItem = (item, key, { navigation }) => {
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
  loadingContainer: {
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",

    width: "100%",

    //backgroundColor:"yellow",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 25,
    borderWidth: 1,
    padding: 5,
    borderColor: "#9098B1",
    borderRadius: 5,
    width: 135,
  },
  itemImageContainer: {
    width: 125,
    height: 125,
  },
  itemImage: {
    borderWidth: 1,
    flex: 1,
    width: 125,
    height: 125,
    resizeMode: "contain",
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
