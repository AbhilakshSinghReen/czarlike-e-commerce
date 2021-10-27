import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { containerStyles, textColors, textStyles } from "../styles/styles";

export default function CustomHorizontalScrollView({
  title,
  moreTitle,
  data,
  renderItem,
  backgroundStyle,
  additionalItemData,
}) {
  return (
    <View style={[containerStyles.width100Percent, backgroundStyle]}>
      <View
        style={[
          containerStyles.width100Percent,
          containerStyles.flexRowSpaceBetweenCenter,
        ]}
      >
        <Text
          style={[
            {
              fontSize: 18,
              fontWeight: "700",
              width: "45%",
              marginTop: 25,
              marginBottom: 15,
            },
          ]}
        >
          {title}
        </Text>

        <TouchableOpacity style={[{ width: "45%", marginRight: 5 }]}>
          <Text
            style={[
              {
                fontSize: 14,
                fontWeight: "700",
                width: "100%",
                marginTop: 25,
                marginBottom: 15,
                textAlign: "right",
                color: "orange",
              },
            ]}
          >
            {moreTitle}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => renderItem(item, index, additionalItemData))}
      </ScrollView>
    </View>
  );
}
