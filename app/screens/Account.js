import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

import CustomButton from "../components/CustomButton";

import { clearStoredUserDetails } from "../async-storage/asyncStorageServices";

import UserContext from "../context/UserContext";

export default function Account({ navigation, route }) {
  const { user, setUser } = useContext(UserContext);

  const loginButtonOnClick = () => {
    navigation.navigate("Login");
  };

  const signUpButtonOnClick = () => {
    navigation.navigate("Register");
  };

  const logOutUser = async () => {
    setUser(null);
    await clearStoredUserDetails();
  };

  const logOutButtonOnClick = async () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: async () => await logOutUser() },
    ]);
  };

  if (user === null) {
    return (
      <SafeAreaView style={styles.backgroundContainer}>
        <View style={styles.headerView}>
          <Text style={styles.pageHeadingText}>Account</Text>
        </View>

        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewContentContainerStyle}
        >
          <CustomButton
            text="Log In"
            onClick={() => loginButtonOnClick()}
            overrideStyles={styles.logInButtonOverrideStyles}
          />

          <CustomButton text="Sign Up" onClick={() => signUpButtonOnClick()} />
        </ScrollView>
        <View style={styles.homeIndicatorRoundedRectangle} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.headerView}>
        <Text style={styles.pageHeadingText}>Account</Text>
      </View>

      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        <Text style={styles.pageHeadingText}>Hi {user.details.userName}</Text>
        <CustomButton text="Log Out" onClick={() => logOutButtonOnClick()} />
      </ScrollView>
      <View style={styles.homeIndicatorRoundedRectangle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
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
  headerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    paddingBottom: 28,
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
  homeIndicatorRoundedRectangle: {
    backgroundColor: "#D1D6E8",

    width: 134,
    height: 5,

    borderRadius: 100,

    opacity: 50,
    marginTop: 50,
    marginBottom: 8,
  },
});
