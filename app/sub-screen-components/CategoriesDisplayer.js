import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import CustomHorizontalScrollView from "../components/CustomHorizontalScrollView";

import { getCategories_Subcategories_And_Subsubcategories } from "../api/apiServices";

const windowWidth = Dimensions.get("window").width;

export default function CategoriesDisplayer({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesData, setCategoriesData] = useState([]);

  const getCategories_Subcategories_And_SubsubcategoriesFromAPI = async () => {
    const result = await getCategories_Subcategories_And_Subsubcategories();

    if (!result.error) {
      setCategoriesData(result.data);
    }
  };

  const refresh = async () => {
    setIsLoading(true);

    await getCategories_Subcategories_And_SubsubcategoriesFromAPI();

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
      <CustomHorizontalScrollView
        title="Categories"
        moreTitle=""
        data={categoriesData}
        renderItem={categoryRenderItem}
        additionalItemData={{ navigation: navigation }}
      />
    </View>
  );
}

const categoryRenderItem = (category, key, { navigation }) => {
  const itemOnPress = async () => {
    navigation.navigate("Category", {
      category: category,
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
    width: "100%",
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
});
