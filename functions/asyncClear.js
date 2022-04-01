import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const asyncClear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // saving error
    Alert("Impossible d'enregistrer les donnees :".e);
  }
};

export default asyncClear;
