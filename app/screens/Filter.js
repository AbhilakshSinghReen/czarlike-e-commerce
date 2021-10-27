import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import { Slider } from "react-native-elements";

import CustomButton from "../components/CustomButton";
import FilterButton from "../components/FilterButton";

import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import ReviewRatingCreator from "../components/ReviewRatingCreator";

import {
  containerStyles,
  margins,
  textStyles,
  textColors,
  textInputStyles,
  shapes,
} from "../styles/styles";

import { availableFilters } from "../constants/constants";

import Grid from "../components/Grid";

export default function Filter({ navigation, route }) {
  const gridWidth = Dimensions.get("window").width * 0.8;
  const { defaultFilters } = []; //route.params;

  const [filters, setFilters] = useState([]);

  const [sliderValue, setSliderValue] = useState(500);

  useEffect(() => {
    const newFilters = [];
    availableFilters.forEach((filter) => {
      switch (filter.type) {
        case "slider":
          newFilters.push({
            name: filter.name,
            type: filter.type,
            parameters: {
              //set these based on the default options
              sliderValue: 500,
              minimumValue: 0,
              maximumValue: 1000,
            },
          });
          break;
        case "selector":
          const newOptions = [];
          filter.parameters.options.forEach((option) => {
            newOptions.push({
              name: option,
              //set selected based on the default options
              selected: false,
            });
          });
          newFilters.push({
            name: filter.name,
            type: filter.type,
            parameters: {
              canMultiSelect: filter.parameters.details === "multiple",
              options: newOptions,
            },
          });
          break;
        default:
          break;
      }
    });

    setFilters(newFilters);
  }, []);

  const selectorRenderItem = (item, key, additionalItemData) => {
    const { name, selected } = item;
    const { filterName } = additionalItemData;
    return (
      <CustomButton
        key={key}
        onClick={() => {
          selectorOptionSetSelected(filterName, name, !selected);
        }}
        overrideStyles={{
          padding: 10,
          backgroundColor: selected ? "#F59B2D0F" : "white",
          borderWidth: selected ? 0 : 1,
          borderColor: "#9098B1",
          width: "45%",
        }}
        overrideTextStyles={{
          color: selected ? "#F59B2D" : "#9098B1",
          fontWeight: selected ? "700" : "400",
          fontSize: 12,
        }}
        text={name}
      />
    );
  };

  const selectorOptionSetSelected = (filterName, optionName, selected) => {
    const newFilters = [...filters];

    let shouldSkip = false;

    newFilters.forEach((filter) => {
      if (!shouldSkip && filter.name === filterName) {
        filter.parameters.options.forEach((option) => {
          if (option.name === optionName) {
            option.selected = selected;
            shouldSkip = true;
          }
        });
      }
    });

    setFilters(newFilters);
  };

  return (
    <SafeAreaView
      style={[
        containerStyles.backgroundContainer,
        containerStyles.flexColumnCenter,
      ]}
    >
      <View style={containerStyles.topBarView}>
        <View style={containerStyles.topBarSubView}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={margins.marginRight12px}
          >
            <EntypoIcon name="cross" size={18} color="#9098B1" />
          </TouchableOpacity>
          <Text
            style={[
              textStyles.text_Poppins_700_normal_16,
              textColors.text_NeutralDark,
            ]}
          >
            Filter Search
          </Text>
        </View>
      </View>

      <View style={shapes.topBarBorderView} />

      <ScrollView
        style={containerStyles.fullWidthMaxHeight}
        contentContainerStyle={
          (containerStyles.flexColumnStart,
          {
            paddingTop: 25,
            paddingBottom: 25,
          })
        }
      >
        {filters.map((filter, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              marginBottom: 25,
            }}
          >
            <Text
              style={[
                textStyles.text_Poppins_700_normal_16,
                textColors.text_NeutralDark,
              ]}
            >
              {filter.name}
            </Text>

            {filter.type === "slider" ? (
              <View
                style={{
                  width: "100%",
                  flex: 1,
                  //alignItems: "stretch",
                  justifyContent: "center",
                }}
              >
                <Slider
                  value={sliderValue}
                  onValueChange={(value) => setSliderValue(value)}
                  thumbStyle={{
                    width: 20,
                    height: 20,
                    backgroundColor: "orange",
                  }}
                  trackStyle={{
                    backgroundColor: "orange",
                  }}
                />
                <Text>Price: {Math.round(sliderValue * 1000)}</Text>
              </View>
            ) : filter.type === "selector" ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Grid
                  data={filter.parameters.options}
                  numberOfColumns={2}
                  renderItem={selectorRenderItem}
                  additionalItemData={{
                    filterName: filter.name,
                  }}
                  maxWidth={gridWidth}
                />
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>

      <CustomButton
        text="Apply"
        onClick={() => {
          navigation.goBack();
        }}
      />
      <View style={shapes.homeIndicator} />
    </SafeAreaView>
  );
}
