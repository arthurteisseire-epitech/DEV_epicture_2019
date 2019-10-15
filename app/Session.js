import AsyncStorage from '@react-native-community/async-storage';

export default class Session {
    storeSession(sessionData) {
        AsyncStorage.setItem('session', sessionData).then();
    }

    getSession() {
        const session = AsyncStorage.getItem('session').then();
        console.log('session: ' + session);
        return session;
    }
}