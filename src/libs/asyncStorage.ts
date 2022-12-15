import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeDataViaStorage = async ({ key, value }: { key: string; value: any }) => {
  try {
    const parsedValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(`@${key}`, parsedValue);
  } catch (e) {
    console.error(e);
  }
};

export const getDataViaStorage = async ({ key }: { key: string }) => {
  let jsonValue = null;
  try {
    jsonValue = await AsyncStorage.getItem(`@${key}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return jsonValue;
  }
};

export const removeDataViaStorage = async ({ key }: { key: string }) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};
