import React, { useState, useContext } from "react";
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Input from "../components/Input";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

import { textStyles, textColors } from "../styles/styles";

import { loginUserWithEmailAndPassword } from "../api/apiServices";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import UserContext from "../context/UserContext";

export default function Login({ navigation, route }) {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isValid = email !== "" && password !== "";

  const onSignInClick = async () => {
    if (!isValid) {
      alert("Please fill all details before continuing.");
      return;
    }

    const result = await loginUserWithEmailAndPassword(email, password);

    if (result.error) {
      setError(result.errorMessage);
    } else {
      setUser(result.data);
      navigation.navigate("Main");
    }
  };

  const onSignUpClick = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.authScreenContainer}>
      <ScrollView
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        <View style={styles.authScreenLogoImageContainer}>
          <Image
            style={[styles.authScreenLogoImage]}
            source={require("../assets/logo.png")}
          />
        </View>
        <Text style={styles.heading2}>Welcome to E-com</Text>
        <Text style={styles.heading3}>Sign in to continue</Text>

        <CustomTextInput
          value={email}
          setValue={(event) => {
            const { text } = event.nativeEvent;
            setEmail(text);
          }}
          type="text"
          textColor="green"
          placeholderText="Enter your email"
          required={true}
          icon={(size, color) => (
            <FontAwesomeIcon name="envelope-o" size={size} color={color} />
          )}
        />

        <CustomTextInput
          value={password}
          setValue={(event) => {
            const { text } = event.nativeEvent;
            setPassword(text);
          }}
          type="password"
          textColor="green"
          placeholderText="Enter your password"
          required={true}
          icon={(size, color) => (
            <FontAwesomeIcon name="envelope-o" size={size} color={color} />
          )}
        />

        {error ? (
          <View
            style={{
              width: "100%",
              marginBottom: 16,
            }}
          >
            <Text
              style={[
                textStyles.text_Poppins_700_normal_12,
                textColors.text_Red,
              ]}
            >
              {error}
            </Text>
          </View>
        ) : null}

        <CustomButton
          text="Sign In"
          onClick={() => onSignInClick()}
          additionalStyles={{}}
        />

        <View style={styles.orContainerView}>
          <View style={styles.orLineView} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLineView} />
        </View>

        <View style={[styles.authAlternativeContainer]}>
          <Image
            style={styles.authAlternativeImage}
            source={require("../assets/icons/Google.png")}
          />
          <View style={[styles.authAlternativeTextContainer]}>
            <Text style={[styles.authAlternativeText]}>Login with Google</Text>
          </View>
        </View>

        <View style={styles.authAlternativeContainer}>
          <Image
            style={styles.authAlternativeImage}
            source={require("../assets/icons/Google.png")}
          />
          <View style={[styles.authAlternativeTextContainer]}>
            <Text style={[styles.authAlternativeText]}>
              Login with Facebook
            </Text>
          </View>
        </View>

        <Text style={styles.heading3Orange}>Forgot Password?</Text>
        <Text style={styles.heading3}>Don't have an account? </Text>

        <TouchableOpacity onPress={() => onSignUpClick()}>
          <Text style={styles.heading3Orange}>Register</Text>
        </TouchableOpacity>

        <View style={styles.homeIndicator} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  authScreenContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  authScreenLogoImageContainer: {
    backgroundColor: "#f7f7f7",
    width: 88,
    height: 88,
    borderRadius: 16,
    elevation: 5,
    marginBottom: 50,
  },
  authScreenLogoImage: {
    width: 81,
    height: 78,
  },
  scrollViewStyle: {
    width: "100%",
  },
  scrollViewContentContainerStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 75,
  },
  heading2: {
    color: "#223263",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginBottom: 15,
  },
  heading3: {
    color: "#9098B1",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 21.6,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  heading3Orange: {
    color: "#F2994A",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 21.6,
    letterSpacing: 0.5,
    marginBottom: 10,
  },

  homeIndicator: {
    backgroundColor: "#FFFFFF",

    width: 134,
    height: 5,

    borderRadius: 100,

    position: "absolute",
    bottom: 8,
  },
  authButton: {
    width: "100%",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#F59B2D",
  },
  orContainerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 21,
    marginBottom: 21,
  },
  orLineView: {
    width: 134,
    height: 1,
    backgroundColor: "#EBF0FF",
  },
  orText: {
    color: "#EBF0FF",
    marginLeft: 28,
    marginRight: 28,
    color: "#223263",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  authAlternativeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    height: 48,

    borderRadius: 5,

    borderWidth: 1,
    borderColor: "#EBF0FF",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,

    marginBottom: 8,
  },
  authAlternativeTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 100,
  },
  authAlternativeImage: {
    marginRight: 14,
  },
  authAlternativeText: {
    color: "#9098B1",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 25.2,
    letterSpacing: 0.5,
  },

  //////////////////////////////
  loginScreenContainer: {
    backgroundColor: "#FFFFFF",

    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    paddingLeft: 16,
    paddingRight: 16,
  },
  loginScreenLogoImageContainer: {
    backgroundColor: "#f7f7f7",

    width: 88,
    height: 88,

    borderRadius: 16,

    elevation: 5,
  },
  loginScreenLogoImage: {
    width: 81,
    height: 78,
  },
  homeIndicator: {
    backgroundColor: "#FFFFFF",

    width: 134,
    height: 5,

    borderRadius: 100,

    position: "absolute",
    bottom: 8,
  },
  authButton: {
    width: "100%",
    height: 57,
    borderRadius: 5,
    backgroundColor: "#F59B2D",
  },

  orContainerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 21,
    marginBottom: 21,
  },
  orLineView: {
    width: 134,
    height: 1,
    backgroundColor: "#EBF0FF",
  },
  orText: {
    color: "#EBF0FF",
    marginLeft: 28,
    marginRight: 28,
    color: "#223263",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.5,
  },
  authAlternativeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",

    height: 48,

    borderRadius: 5,

    borderWidth: 1,
    borderColor: "#EBF0FF",
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,

    marginBottom: 8,
  },
  authAlternativeTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 100,
  },
  authAlternativeImage: {
    marginRight: 14,
  },
  authAlternativeText: {
    color: "#9098B1",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 25.2,
    letterSpacing: 0.5,
  },
});
