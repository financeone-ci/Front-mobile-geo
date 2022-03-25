import AsyncStorage from "@react-native-async-storage/async-storage";

// Enregistrement d'objet dans l'apistorage*************************
const storeDataObj = async (data, jeton) => {
  try {
    const dataValue = JSON.stringify(data);
    const async1 = ["@storage_data", dataValue];
    const async2 = ["@storage_jeton", jeton];
    await AsyncStorage.multiSet([async1, async2]);
  } catch (e) {
    // saving error
    Alert("Impossible d'enregistrer les donnees :".e);
  }
};

export default storeDataObj;
