import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const asyncGetItemObj = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    Alert("Impossible de lire les donnees");
  }
};

export default asyncGetItemObj;
