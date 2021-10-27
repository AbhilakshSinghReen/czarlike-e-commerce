import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import ProductReviews from "../screens/ProductReviews";
import WriteReview from "../screens/WriteReview";
import Notifications from "../screens/Notifications";

import TabStack from "./TabStack";

import SortBy from "../screens/SortBy";
import Filter from "../screens/Filter";
import ShipTo from "../screens/ShipTo";
import AddLocation from "../screens/AddLocation";
import PaymentMethod from "../screens/PaymentMethod";
import Success from "../screens/Success";

import Login from "../screens/Login";
import Register from "../screens/Register";

import Category from "../screens/Category";
import SubSubcategory from "../screens/SubSubcategory";

import Wishlist from "../screens/Wishlist";

//const HomeStack = createStackNavigator(screens);

export default function MainStack() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Main" headerMode={false}>
        <stack.Screen name="Main" component={TabStack} />
        <stack.Screen name="ProductDetails" component={ProductDetails} />
        <stack.Screen name="ProductReviews" component={ProductReviews} />
        <stack.Screen name="WriteReview" component={WriteReview} />
        <stack.Screen name="Notifications" component={Notifications} />
        <stack.Screen name="Sort By" component={SortBy} />
        <stack.Screen name="Filter" component={Filter} />
        <stack.Screen name="Ship To" component={ShipTo} />
        <stack.Screen name="Add Location" component={AddLocation} />
        <stack.Screen name="Payment Method" component={PaymentMethod} />
        <stack.Screen name="Success" component={Success} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Register" component={Register} />
        <stack.Screen name="Category" component={Category} />
        <stack.Screen name="SubSubcategory" component={SubSubcategory} />
        <stack.Screen name="Wishlist" component={Wishlist} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
