import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncGetItemStr = async (key) => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default asyncGetItemStr;
