import AsyncStorage from "@react-native-async-storage/async-storage";

import * as AsyncStorageKeys from "./asyncStorageKeys";

const storeString = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }

  return false;
};

const getString = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
    return null;
  }

  return null;
};

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }

  return false;
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    return null;
  }

  return null;
};

export async function storeUserDetails(userDetails) {
  const result = await storeData(AsyncStorageKeys.userKey, userDetails);
  return result;
}

export async function getSavedUserDetails() {
  const result = await getData(AsyncStorageKeys.userKey);
  return result;
}

export async function clearStoredUserDetails() {
  const result = await storeData(AsyncStorageKeys.userKey, null);
  return result;
}
