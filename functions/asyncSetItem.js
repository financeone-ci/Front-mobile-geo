import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
// Enregistrement d'objet dans l'apistorage*************************
const asyncSetItem = async (data) => {
  try {
    await AsyncStorage.multiSet(data);
  } catch (e) {
    // saving error
    Alert("ERREUR : ".e);
  }
};

export default asyncSetItem;
