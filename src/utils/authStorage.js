
import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:token`,
    );

    return accessToken;
  }

  async setAccessToken(accessToken) {
    return AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  async removeAccessToken() {
    return AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;