import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import axios from "axios";

import { RefreshControlBase, StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MainStack from "./app/routes/MainStack";

import UserContext from "./app/context/UserContext";

import { getSavedUserDetails } from "./app/async-storage/asyncStorageServices";

const loadFonts = () => {
  return Font.loadAsync({
    Poppins: require("./app/assets/fonts/Poppins/Poppins-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [user, setUser] = useState(null);

  const loadSavedUserFromAsyncStorage = async () => {
    const result = await getSavedUserDetails();
    setUser(result);
  };

  const refresh = async () => {
    loadSavedUserFromAsyncStorage();
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (user?.authToken) {
      axios.interceptors.request.use(
        (config) => {
          //config.headers.authorization = `Bearer ${user.authToken}`;
          //config.headers.authorization = user.authToken;
          config.headers = {
            Authorization: `Bearer ${user.authToken}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      console.log("User changed: ", user.authToken);
    }
  }, [user]);

  if (fontsLoaded) {
    return (
      <UserContext.Provider value={{ user, setUser }}>
        <MainStack />
      </UserContext.Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
