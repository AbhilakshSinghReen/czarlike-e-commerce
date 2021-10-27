import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import SearchResult from "../screens/SearchResult";
import Cart from "../screens/Cart";
import NotificationOffer from "../screens/NotificationOffer";
import Account from "../screens/Account";

//import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";

export default function TabStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? "#F59B2D" : "#9098B1";
          switch (route.name) {
            case "Home": {
              return (
                <AntDesignIcon name="home" size={size} color={iconColor} />
              );
            }
            case "Explore": {
              return (
                <AntDesignIcon name="search1" size={size} color={iconColor} />
              );
            }
            case "Cart": {
              return (
                <AntDesignIcon
                  name="shoppingcart"
                  size={size}
                  color={iconColor}
                />
              );
            }
            case "Offers": {
              return (
                <AntDesignIcon name="pushpino" size={size} color={iconColor} />
              );
            }
            case "Account": {
              return (
                <FontistoIcon name="person" size={size} color={iconColor} />
              );
            }
            default: {
              return (
                <AntDesignIcon name="question" size={size} color={iconColor} />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={SearchResult} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Offers" component={NotificationOffer} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
