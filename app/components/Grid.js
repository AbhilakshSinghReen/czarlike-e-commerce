import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";

import { containerStyles } from "../styles/styles";

export default function Grid({
  data,
  numberOfColumns,
  maxWidth,
  renderItem,
  additionalItemData,
}) {
  const gridWidth = maxWidth ? maxWidth : Dimensions.get("window").width;
  const itemWithMarginWidth = gridWidth / numberOfColumns;
  const itemWidth = itemWithMarginWidth * 0.9;
  const itemHorizontalMargin = itemWithMarginWidth * 0.1;
  const itemVerticalMargin = itemHorizontalMargin;

  const [gridData, setGridData] = useState([]);

  //dividing the data array into smaller arrays each of the length numberOfColumns
  useEffect(() => {
    let isComponentMounted = true;

    let newGridData = [];
    let rowData = [];
    data.forEach((item) => {
      if (rowData.length < numberOfColumns) {
        rowData.push(item);
      } else {
        newGridData.push(rowData);
        rowData = [];
        rowData.push(item);
      }
    });

    if (rowData.length <= numberOfColumns) {
      newGridData.push(rowData);
    }

    if (isComponentMounted) {
      setGridData(newGridData);
    }

    return () => {
      isComponentMounted = false;
    };
  }, [data]);

  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        width: gridWidth,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {gridData.map((row, rowIndex) => (
        <View
          key={rowIndex}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginBottom: itemVerticalMargin,
          }}
        >
          {row.map((cell, columnIndex) =>
            renderItem(cell, columnIndex, additionalItemData)
          )}
        </View>
      ))}
    </View>
  );
}
