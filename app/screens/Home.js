import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Input from "../components/Input";
import TabNavigatorUI from "../components/TabNavigatorUI";
import AntIcon from "react-native-vector-icons/AntDesign";

import CategoryDisplayer from "../components/CategoryDisplayer";
import CustomHorizontalScrollView from "../components/CustomHorizontalScrollView";

import Grid from "../components/Grid";

import { containerStyles, textColors, textStyles } from "../styles/styles";

import DealsOfTheDayDisplayer from "../components/DealsOfTheDayDisplayer";
import FeaturedProductsDisplayer from "../components/FeaturedProductsDisplayer";

import CategoriesDisplayer from "../sub-screen-components/CategoriesDisplayer";

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#FFFFFF",

    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingLeft: 16,
    paddingRight: 16,
  },
  topBarView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginTop: 44,
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
  },
});

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const wishlistButtonOnClick = () => {
    navigation.navigate("Wishlist");
  };

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.topBarView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Explore");
          }}
          style={{
            width: "auto",
            flexGrow: 100,
            marginRight: 13.5,
            marginBottom: 0,
            marginLeft: 64,
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            borderColor: "#9098B1",
          }}
        >
          <Text
            style={{
              width: "100%",
              color: "#9098B1",
            }}
          >
            Search Products
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => wishlistButtonOnClick()}>
          <AntIcon style={styles.topBarIcon} name="hearto" size={25} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MainStack", {
              screen: "Notifications",
            });
          }}
        >
          <AntIcon style={styles.topBarIcon} name="bells" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.topBarBorderView} />

      <ScrollView
        style={styles.mainContentView}
        contentContainerStyle={styles.mainContentScrollViewContainerStyle}
      >
        <Image
          style={{
            width: "100%",
          }}
          source={require("../assets/dev-only/offer-banner.png")}
        />

        <Image
          style={{ marginTop: 16, marginBottom: 15 }}
          source={require("../assets/dev-only/slideshow-image.png")}
        />

        <CategoriesDisplayer navigation={navigation} />

        {/*
        <CustomHorizontalScrollView
          title="Flash Sale"
          moreTitle="See More"
          data={flashSaleData}
          renderItem={flashSaleRenderItem}
          additionalItemData={{ navigation: navigation }}
        />
          */}

        <DealsOfTheDayDisplayer navigation={navigation} />

        <FeaturedProductsDisplayer navigation={navigation} />

        {/*
        <CustomHorizontalScrollView
          title="Mega Sale"
          moreTitle="See More"
          data={flashSaleData}
          renderItem={flashSaleRenderItem}
          additionalItemData={{ navigation: navigation }}
        />
        */}

        <TouchableOpacity>
          <Image
            style={{ marginTop: 24 }}
            source={require("../assets/dev-only/recomended-product-banner.png")}
          />
        </TouchableOpacity>

        <Grid
          data={gridData}
          numberOfColumns={2}
          renderItem={gridRenderItem}
          additionalItemData={{ navigation: navigation }}
        />
      </ScrollView>
      <View style={styles.tabsView} />

      <View style={styles.homeIndicator} />
    </SafeAreaView>
  );
}

const categoriesData = [
  {
    icon: null,
    title: "Laptops",
    image: "http://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg",
  },
  {
    icon: null,
    title: "Phones",
    image:
      "https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg",
  },
  {
    icon: null,
    title: "Lights",
    image:
      "https://ii1.pepperfry.com/media/catalog/product/t/r/568x625/transparent-glass--hanging-lights-by-decorativeray-transparent-glass--hanging-lights-by-decorativera-sblkee.jpg",
  },
  {
    icon: null,
    title: "TVs",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-03-20-at-7-50-11-am-0-1545168655.png?crop=1.00xw:0.753xh;0,0.139xh&resize=1200:*",
  },
  {
    icon: null,
    title: "Computers",
    image: "https://m.media-amazon.com/images/I/819XYUimTuL._AC_SL1500_.jpg",
  },
];

const flashSaleData = Array(10).fill({
  image: "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
  name: "iPhone 11",
  price: "$299,43",
  originalPrice: "$534,33",
  discount: "24% Off",
});

const flashSaleRenderItem = (item, key, { navigation }) => {
  return (
    <TouchableOpacity
      key={key}
      onPress={() => {
        navigation.navigate("ProductDetails", { product: item });
      }}
      style={[
        containerStyles.flexColumnStartCenter,
        {
          marginRight: key === categoriesData.length - 1 ? 10 : 25,
          //height: 400,
          borderWidth: 1,
          padding: 5,
          borderColor: "#9098B1",
          borderRadius: 5,
          width: 135,
        },
      ]}
    >
      <View
        style={{
          width: 125,
          height: 125,
        }}
      >
        <Image
          style={{
            borderWidth: 1,
            flex: 1,
            width: 125,
            height: 125,
            resizeMode: "contain",
          }}
          source={{ uri: item.image }}
        />
      </View>

      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: "700",
            width: "100%",
            marginTop: 25,
            marginBottom: 15,
          },
          textColors.text_NeutralDark,
        ]}
      >
        {item.name}
      </Text>
      <Text
        style={[
          {
            fontSize: 14,
            fontWeight: "700",
            width: "100%",
            marginBottom: 15,
            color: "orange",
          },
        ]}
      >
        {item.price}
      </Text>

      <View
        style={[
          containerStyles.width100Percent,
          containerStyles.flexRowStartCenter,
        ]}
      >
        <Text
          style={[
            {
              fontSize: 10,
              fontWeight: "700",
              width: "40%",
              //marginRight: 2,
              textDecorationLine: "line-through",
            },
            textColors.text_NeutralGrey,
          ]}
        >
          {item.originalPrice}
        </Text>
        <Text
          style={[
            {
              fontSize: 10,
              fontWeight: "700",
              width: "60%",
              textAlign: "left",
            },
            textColors.text_Red,
          ]}
        >
          {item.discount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const gridData = [
  {
    image:
      "https://www.lg.com/in/images/washing-machines/md07518521/gallery/FHV1409ZWB-Washing-Machines-Left-View-Open-D-07V.jpg",
    name: "Washing Machine",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
  },
  {
    image: "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
    name: "HP Air Laptop",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-fridges-2019-1569421093.png?crop=0.730xw:0.599xh;0.134xw,0.0989xh&resize=1200:*",
    name: "LG Refrigerator",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
  },
  {
    image:
      "https://www.whirlpoolindia.com/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/f/r/freshcare__combo_8kg_5.jpg",
    name: "Washing Machine",
    price: "$299,43",
    originalPrice: "$534,33",
    discount: "24% Off",
  },
];

const gridRenderItem = (item, key, { navigation }) => {
  return (
    <TouchableOpacity
      key={key}
      onPress={() => {
        navigation.navigate("ProductDetails", { product: item });
      }}
      style={[
        containerStyles.flexColumnStartCenter,
        {
          marginRight: key === categoriesData.length - 1 ? 10 : 25,
          //height: 400,
          borderWidth: 1,
          padding: 5,
          borderColor: "#9098B1",
          borderRadius: 5,
          width: 135,
        },
      ]}
    >
      <View
        style={{
          width: 125,
          height: 125,
        }}
      >
        <Image
          style={{
            borderWidth: 1,
            flex: 1,
            width: 125,
            height: 125,
            resizeMode: "contain",
          }}
          source={{ uri: item.image }}
        />
      </View>

      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: "700",
            width: "100%",
            marginTop: 25,
            marginBottom: 15,
          },
          textColors.text_NeutralDark,
        ]}
      >
        {item.name}
      </Text>
      <Text
        style={[
          {
            fontSize: 14,
            fontWeight: "700",
            width: "100%",
            marginBottom: 15,
            color: "orange",
          },
        ]}
      >
        {item.price}
      </Text>

      <View
        style={[
          containerStyles.width100Percent,
          containerStyles.flexRowStartCenter,
        ]}
      >
        <Text
          style={[
            {
              fontSize: 10,
              fontWeight: "700",
              width: "40%",
              //marginRight: 2,
              textDecorationLine: "line-through",
            },
            textColors.text_NeutralGrey,
          ]}
        >
          {item.originalPrice}
        </Text>
        <Text
          style={[
            {
              fontSize: 10,
              fontWeight: "700",
              width: "60%",
              textAlign: "left",
            },
            textColors.text_Red,
          ]}
        >
          {item.discount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
