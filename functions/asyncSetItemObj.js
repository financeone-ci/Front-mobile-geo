import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const asyncSetItemObj = async (key) => {
  try {
    const dataValue = JSON.stringify(key);
    await AsyncStorage.setItem("@storage_data", dataValue);
  } catch (e) {
    // saving error
    Alert("ERREUR : ".e);
  }
};

export default asyncSetItemObj;
