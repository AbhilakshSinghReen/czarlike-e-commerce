import React, { useState } from "react";
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

import CustomHorizontalScrollView from "../components/CustomHorizontalScrollView";

const windowWidth = Dimensions.get("window").width;

export default function Category({ navigation, route }) {
  const { category } = route.params;

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
          <Text style={styles.pageHeadingText}>{category.title}</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        <View style={styles.mainHeadingContainer}>
          <ImageBackground
            style={styles.mainHeadingImageBackground}
            source={{ uri: category.image }}
            resizeMode="cover"
            imageStyle={{ opacity: 0.5 }}
          >
            <Text style={styles.pageMainHeadingText}>{category.title}</Text>
          </ImageBackground>
        </View>

        {category.subcategories.map((item, index) => (
          <CustomHorizontalScrollView
            title={item.title}
            moreTitle=""
            data={item.subsubcategories}
            renderItem={categoryRenderItem}
            additionalItemData={{ navigation: navigation }}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const categoryRenderItem = (category, key, { navigation }) => {
  const itemOnPress = async () => {
    navigation.navigate("SubSubcategory", {
      subSubcategory: category,
    });
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => itemOnPress()}
      key={key}
    >
      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={{ uri: category.image }} />
      </View>

      <Text numberOfLines={2}>{category.title}</Text>
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
});
