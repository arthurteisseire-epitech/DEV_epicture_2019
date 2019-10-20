import AsyncStorage from '@react-native-community/async-storage';

export default class Session {
    static async store(sessionData) {
        try {
            await AsyncStorage.setItem('session', sessionData);
        } catch (e) {
            console.log(e);
        }
    }

    static async get() {
        try {
            return await AsyncStorage.getItem('session');
        } catch (e) {
            console.log(e);
        }
    }

    static async clear() {
        try {
            return await AsyncStorage.removeItem('session');
        } catch (e) {
            console.log(e);
        }
    }
}
