import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";

import CustomButton from "../components/CustomButton";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";

import CustomImage from "../components/CustomImage";

import { convertIntegerToIndianLocaleString } from "../helpers/mathHelpers";

import {
  getProductsInWishList,
  addProductToWishlist,
  removeProductFromWishlist,
  getProductDetails,
  checkIfProductIsInWishlist,
  addProductToCart,
  checkIfProductIsInCart,
} from "../api/apiServices";

import UserContext from "../context/UserContext";

import { WebView } from "react-native-webview";

import RenderHtml from "react-native-render-html";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;

export default function ProductDetails({ navigation, route }) {
  const { product } = route.params;

  const { user, setUser } = useContext(UserContext);

  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [productDetails, setProductDetails] = useState({});

  const getFullProductDetailsFromAPI = async () => {
    const result = await getProductDetails(product.id);

    if (!result.error) {
      setProductDetails(result.data);
    }
  };

  const checkIfProductIsInWishlistFromAPI = async () => {
    const result = await checkIfProductIsInWishlist(product.id);
    setIsProductInWishlist(result);
  };

  const checkIfProductIsInCartFromAPI = async () => {
    const result = await checkIfProductIsInCart(product.id);
    setIsProductInCart(result);
  };

  const refresh = async () => {
    setIsLoading(true);

    await getFullProductDetailsFromAPI();
    await checkIfProductIsInWishlistFromAPI();
    await checkIfProductIsInCartFromAPI();

    setIsLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    //console.log("Price: ", productDetails.price);
    //console.log("offerPrice: ", productDetails.offerPrice);
  }, [productDetails]);

  const searchButtonOnClick = () => {
    navigation.navigate("Explore");
  };

  const isInWishlistToggleButtonOnClick = async () => {
    if (isProductInWishlist) {
      ToastAndroid.show("Removed from your wish list.", ToastAndroid.SHORT);
      setIsProductInWishlist(false);
      removeProductFromWishlist(product.id);
    } else {
      ToastAndroid.show("Added to your wish list.", ToastAndroid.SHORT);
      setIsProductInWishlist(true);
      await addProductToWishlist(product.id);
    }
    await getProductsInWishList(user.authToken);
  };

  const addToCartButtonOnClick = async () => {
    const result = await addProductToCart(
      productDetails.id,
      productDetails.variants[0].id,
      productDetails.vendorId
    );

    if (!result.error) {
      alert(
        `Product has been added to cart [Variant: ${productDetails.variants[0].id}]`
      );
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.topBarLeftView}>
            <FontAwesomeIcon
              name="long-arrow-left"
              style={styles.backIcon}
              size={18}
              color="#9098B1"
            />
            <Text style={styles.pageHeadingText}>
              {product.name.length > 14
                ? product.name.slice(0, 11) + "..."
                : product.name}
            </Text>
          </View>
        </View>
        <ActivityIndicator color="black" size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.headerView}>
        <View style={styles.topBarLeftView}>
          <FontAwesomeIcon
            name="long-arrow-left"
            style={styles.backIcon}
            size={18}
            color="#9098B1"
          />
          <Text style={styles.pageHeadingText}>
            {product.name.length > 14
              ? product.name.slice(0, 11) + "..."
              : product.name}
          </Text>
        </View>

        <View style={styles.topBarRightView}>
          <TouchableOpacity onPress={() => searchButtonOnClick()}>
            <AntDesignIcon style={styles.topBarIcon} name="search1" size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => isInWishlistToggleButtonOnClick()}>
            {isProductInWishlist ? (
              <AntDesignIcon
                style={styles.topBarIcon}
                name="heart"
                size={25}
                color="red"
              />
            ) : (
              <AntDesignIcon
                style={styles.topBarIcon}
                name="hearto"
                size={25}
                color="red"
              />
            )}
          </TouchableOpacity>

          {/*<EntypoIcon name="dots-three-vertical" size={25} />*/}
        </View>
      </View>

      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        <CustomImage width={windowWidth * 0.95} uri={productDetails.image} />

        <View style={styles.productDetailsView}>
          <Text style={styles.productNameText}>{productDetails?.name}</Text>

          <View style={styles.productModelView}>
            <Text style={styles.productModelLabelText}>Model: </Text>

            <Text style={styles.productModelLabelText}>
              {productDetails?.model}
            </Text>
          </View>

          {productDetails?.price !== productDetails?.offerPrice ? (
            <View>
              <Text style={styles.productPriceStrikeThroughText}>
                ₹ {convertIntegerToIndianLocaleString(productDetails?.price)}
              </Text>
              <Text style={styles.productPriceText}>
                ₹{" "}
                {convertIntegerToIndianLocaleString(productDetails?.offerPrice)}
              </Text>
            </View>
          ) : (
            <Text style={styles.productPriceText}>
              ₹ {convertIntegerToIndianLocaleString(productDetails?.price)}
            </Text>
          )}

          <RenderHtml
            contentWidth={windowWidth}
            source={{
              html: productDetails?.description,
            }}
          />

          <RenderHtml
            contentWidth={windowWidth}
            source={{
              html: productDetails?.keyFeatures,
            }}
          />

          {productDetails.freeShipping ? (
            <View style={styles.deliveryConditionsContainer}>
              <FontAwesome5Icon name="shipping-fast" color="green" size={20} />
              <Text style={styles.deliveryConditionText}>Free Shipping</Text>
            </View>
          ) : null}

          {productDetails.returnAvailable ? (
            <View style={styles.deliveryConditionsContainer}>
              <IoniconsIcon
                name="refresh-circle-outline"
                color="green"
                size={25}
              />

              <Text style={styles.deliveryConditionText}>Return Available</Text>
            </View>
          ) : null}

          {productDetails.cancelAvailable ? (
            <View style={styles.deliveryConditionsContainer}>
              <MaterialCommunityIconsIcon
                name="cancel"
                color="green"
                size={25}
              />
              <Text style={styles.deliveryConditionText}>
                Cancellation Available
              </Text>
            </View>
          ) : null}
        </View>

        {productDetails.variants.length !== 0 ? (
          isProductInCart ? (
            <Text style={styles.alreadyInYourCartText}>
              Already In Your Cart
            </Text>
          ) : (
            <CustomButton
              text="Add To Cart"
              onClick={() => addToCartButtonOnClick()}
              overrideStyles={styles.mainButtonOverride}
            />
          )
        ) : (
          <Text style={styles.outOfStockText}>Out Of Stock</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
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
  backIcon: {
    marginRight: 12,
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
  topBarLeftView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topBarRightView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productDetailsView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: 8,
    marginTop: 15,
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
  productNameText: {
    width: "100%",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#223263",
    marginBottom: 15,
  },
  productModelView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },
  productModelLabelText: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#223263",
  },
  productModelText: {
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: "#223263",
  },
  productPriceText: {
    width: "100%",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.5,
    color: "#F59B2D",
    marginBottom: 15,
  },
  productPriceStrikeThroughText: {
    width: "100%",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 30,
    letterSpacing: 0.5,
    color: "red",
    marginBottom: 5,
    textDecorationLine: "line-through",
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
  productDescriptionText: {
    width: "100%",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 18,
    color: "#223263",
    marginBottom: 15,
  },
  topBarIcon: {
    marginRight: 12,
  },
  mainButtonOverride: {
    marginBottom: 15,
  },
  outOfStockText: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.5,
    color: "red",
    marginBottom: 15,
  },
  alreadyInYourCartText: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.5,
    color: "orange",
    marginBottom: 15,
  },
  deliveryConditionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  deliveryConditionText: {
    fontSize: 20,
    marginLeft: 15,
  },
});
