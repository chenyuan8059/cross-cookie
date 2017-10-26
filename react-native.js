import { AsyncStorage } from 'react-native';
import { isObject } from './helper';

export const set = (key, val) => {
  if (isObject(key)) {
    const obj = key;
    const pairs = Object.keys(obj).map(key => [key, obj[key]]);

    return AsyncStorage.multiSet(pairs);
  }

  return AsyncStorage.setItem(key, val);
};

export const get = key => AsyncStorage.getItem(key);

export const getAll = () => AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiGet(keys));

export const remove = key => AsyncStorage.removeItem(key);

export const clearAll = () => AsyncStorage.clear();
