import AsyncStorage from "@react-native-async-storage/async-storage"

//async storage get data
export const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        // value previously stored
        return value
      }
    } catch (e) {
      // error reading value
      return "error while getting data" + e
    }
  }
  //async storage save data
  export const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
    }
  }