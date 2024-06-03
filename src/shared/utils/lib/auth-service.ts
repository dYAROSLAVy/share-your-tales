import AsyncStorage from "@react-native-async-storage/async-storage";

enum StorageKey {
  Token = "token",
}

export class AsyncStorageService {
  static async saveAccessToken(token: string) {
    try {
      return await AsyncStorage.setItem(StorageKey.Token, token);
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
    }
  }

  static async getAccessToken() {
    try {
      const value = await AsyncStorage.getItem(StorageKey.Token);

      return value;
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
    }
  }

  static async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      if (e instanceof Error) {
        return e.message;
      }
    }
  }
}
