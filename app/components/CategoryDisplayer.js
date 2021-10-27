import React from "react";
import { View, Text, ScrollView } from "react-native";

import { containerStyles, textColors, textStyles } from "../styles/styles";

const categoriesData = [
  {
    icon: null,
    title: "Laptops",
  },
  {
    icon: null,
    title: "Phones",
  },
  {
    icon: null,
    title: "Lights",
  },
  {
    icon: null,
    title: "TVs",
  },
  {
    icon: null,
    title: "Computers",
  },
];

export default function CategoryDisplayer() {
  return (
    <View style={[containerStyles.width100Percent]}>
      <Text
        style={[
          {
            fontSize: 18,
            fontWeight: "700",
            width: "100%",
            marginTop: 25,
            marginBottom: 15,
          },
        ]}
      >
        Categories
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoriesData.map((category, index) => (
          <View
            style={[           
              containerStyles.flexColumnCenterCenter,
              {
                marginRight: index === categoriesData.length - 1 ? 10 : 25,
              },
            ]}
            key={index}
          >
            <View
              key={index}
              style={[
                {
                  backgroundColor: "dodgerblue",
                },
                containerStyles.circleRadius40px,
                containerStyles.flexColumnCenterCenter,
              ]}
            >
              <Text>Icon</Text>
            </View>

            <Text style={[textColors.text_Black]}>{category.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
