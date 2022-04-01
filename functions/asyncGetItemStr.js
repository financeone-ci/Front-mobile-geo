import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncGetItemStr = async (keys) => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.multiGet(keys);
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default asyncGetItemStr;
