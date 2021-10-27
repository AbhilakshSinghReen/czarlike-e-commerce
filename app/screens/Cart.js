import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import CustomButton from "../components/CustomButton";

import { getCart } from "../api/apiServices";

import UserContext from "../context/UserContext";

import { convertIntegerToIndianLocaleString } from "../helpers/mathHelpers";

import EntypoIcon from "react-native-vector-icons/Entypo";

const windowWidth = Dimensions.get("window").width;

const itemImageWidthCoefficient = 0.2;
const itemNameWidthCoefficient = 0.4;
const itemPriceWidthCoefficient = 0.2;
const itemCrossButtonWidthCoefficient = 0.1;

export default function Cart({ navigation, route }) {
  const { user } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState(null);

  const itemCrossButtonOnClick = async (itemIndex) => {
    alert("An error occurred while trying to remove the item.");
  };

  const getCartFromAPI = async () => {
    const result = await getCart();

    if (!result.error) {
      setCart(result.data);
    }
  };

  const refresh = async () => {
    setIsLoading(true);

    await getCartFromAPI();

    setIsLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    console.log("Cart changed. Number of items: ", cart?.items?.length);
  }, [cart]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.topBarLeftView}>
            <Text style={styles.pageHeadingText}>Your Cart</Text>
          </View>
        </View>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.topBarLeftView}>
          <Text style={styles.pageHeadingText}>Your Cart</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        {cart.items.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <Image style={styles.itemImage} source={{ uri: item.image }} />

            <Text style={styles.itemNameText} numberOfLines={3}>
              {item.name}
            </Text>

            <Text style={styles.itemPriceText} numberOfLines={3}>
              ₹ {convertIntegerToIndianLocaleString(item.price)}
            </Text>

            <View style={styles.itemCrossButtonContainer}>
              <TouchableOpacity
                style={styles.itemCrossButton}
                onPress={() => itemCrossButtonOnClick()}
              >
                <EntypoIcon name="cross" size={25} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalView}>
        <Text style={styles.totalLabelText}>Total: </Text>

        <Text style={styles.totalText}>
          ₹ {convertIntegerToIndianLocaleString(cart.total)}
        </Text>
      </View>

      {user === null ? (
        <CustomButton
          text="Log In To Check Out"
          onClick={() => navigation.navigate("Ship To")}
          overrideStyles={styles.mainButtonOverride}
        />
      ) : (
        <CustomButton
          text="Check Out"
          onClick={() => navigation.navigate("Ship To")}
          overrideStyles={styles.mainButtonOverride}
        />
      )}
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
