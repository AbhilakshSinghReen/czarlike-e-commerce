import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Input from "../components/Input";
import CustomButton from "../components/CustomButton";
import CustomPicker from "../components/CustomPicker";

import CustomTextInput from "../components/CustomTextInput";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import {
  getAllCountries,
  getStatesFromCountryId,
  getCitiesFromStateId,
  registerNewUser,
} from "../api/apiServices";

export default function Register({ navigation, route }) {
  const { user, setUser } = useContext(UserContext);

  const [allCountries, setAllCountries] = useState([
    { label: "Select Country", value: -1 },
  ]);
  const [statesInCountry, setStatesInCountry] = useState([
    { label: "Select State", value: -1 },
  ]);
  const [citiesInState, setCitiesInState] = useState([
    { label: "Select City", value: -1 },
  ]);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryId, setCountryId] = useState(-1);
  const [stateId, setStateId] = useState(-1);
  const [cityId, setCityId] = useState(-1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");

  const isValid =
    userName !== "" &&
    email !== "" &&
    password !== "" &&
    password === confirmPassword &&
    userName !== "" &&
    countryId !== -1 &&
    stateId !== -1 &&
    cityId !== -1 &&
    phoneNumber !== "";

  const [error, setError] = useState("okay");

  const getAllCountriesFromApi = async () => {
    const result = await getAllCountries();

    if (!result.error) {
      const resultModified = [{ label: "Select Country", value: -1 }];

      result.data.forEach((item, index) => {
        resultModified.push({
          label: item.name,
          value: item.id,
        });
      });
      setAllCountries(resultModified);
    }
  };

  const getAllStatesInSelectedCountryFromApi = async () => {
    if (countryId === -1) {
      return;
    }

    const result = await getStatesFromCountryId(countryId);

    if (!result.error) {
      const resultModified = [{ label: "Select State", value: -1 }];

      result.data.forEach((item, index) => {
        resultModified.push({
          label: item.name,
          value: item.id,
        });
      });
      setStatesInCountry(resultModified);
    }
  };

  const getAllCitiesInSelectedStateFromApi = async () => {
    if (stateId === -1) {
      return;
    }

    const result = await getCitiesFromStateId(stateId);

    if (!result.error) {
      const resultModified = [{ label: "Select City", value: -1 }];

      result.data.forEach((item, index) => {
        resultModified.push({
          label: item.name,
          value: item.id,
        });
      });
      setCitiesInState(resultModified);
    }
  };

  const refresh = async () => {
    await getAllCountriesFromApi();
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    getAllStatesInSelectedCountryFromApi();
    setStateId(-1);
    setCityId(-1);
  }, [countryId]);

  useEffect(() => {
    getAllCitiesInSelectedStateFromApi();
    setCityId(-1);
  }, [stateId]);

  useEffect(() => {
    console.log("User updated: ", user);
  }, [user]);

  const onSignUpClick = async () => {
    if (!isValid) {
      alert("Please fill all details before signing up.");
      return;
    }

    const newUserObject = {
      user_name: userName,
      email: email,
      password: password,
      country_id: countryId,
      state_id: stateId,
      city_id: cityId,
      phone: phoneNumber,
      website: website,
    };

    const result = await registerNewUser(newUserObject);

    if (result.error) {
      setError(result.errorMessage);
    } else {
      setUser(result.data);
      navigation.navigate("Main");
    }
  };

  const onSignInClick = () => {
    navigation.navigate("Login");
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

        <Text style={styles.heading2}>Let's Get Started</Text>

        <Text style={styles.heading3}>Create a new account</Text>

        <CustomTextInput
          value={userName}
          setValue={(event) => {
            const { text } = event.nativeEvent;
            setUserName(text);
          }}
          type="text"
          textColor="green"
          placeholderText="Enter your username"
          required={true}
          icon={(size, color) => (
            <FontAwesomeIcon name="envelope-o" size={size} color={color} />
          )}
        />

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

        <CustomTextInput
          value={confirmPassword}
          setValue={(event) => {
            const { text } = event.nativeEvent;
            setConfirmPassword(text);
          }}
          type="password"
          textColor="green"
          placeholderText="Confirm your password"
          required={true}
          icon={(size, color) => (
            <FontAwesomeIcon name="envelope-o" size={size} color={color} />
          )}
        />

        <CustomPicker
          items={allCountries}
          selectedValue={countryId}
          setSelectedValue={setCountryId}
        />

        <CustomPicker
          items={statesInCountry}
          selectedValue={stateId}
          setSelectedValue={setStateId}
          disabled={countryId === -1}
        />

        <CustomPicker
          items={citiesInState}
          selectedValue={cityId}
          setSelectedValue={setCityId}
          disabled={stateId === -1}
        />

        <CustomTextInput
          value={phoneNumber}
          setValue={(event) => {
            const { text } = event.nativeEvent;
            setPhoneNumber(text);
          }}
          type="text"
          textColor="green"
          placeholderText="Enter your phone number"
          required={true}
          icon={(size, color) => (
            <FontAwesomeIcon name="envelope-o" size={size} color={color} />
          )}
        />

        <CustomTextInput
          value={website}
          setValue={(event) => {
            const { text } = event.nativeEvent;
            setWebsite(text);
          }}
          type="text"
          textColor="green"
          placeholderText="Enter your website"
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
              style={{
                fontFamily: "Poppins",
                fontWeight: "700",
                fontStyle: "normal",
                fontSize: 12,
                lineHeight: 18,
                letterSpacing: 0.5,
                color: "red",
              }}
            >
              {error}
            </Text>
          </View>
        ) : null}

        <CustomButton
          text="Sign Up"
          onClick={() => onSignUpClick()}
          overrideStyles={{ marginBottom: 15 }}
        />

        <Text style={styles.heading3}>Have an account?</Text>

        <TouchableOpacity onPress={() => onSignInClick()}>
          <Text style={styles.heading3Orange}>Sign In</Text>
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
});
