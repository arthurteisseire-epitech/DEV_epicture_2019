import React, {Component} from 'react'
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            account_id: 0,
            account_username: '',
            refresh_token: '',
            access_token: '',
            loading: true
        };
    }

    // async componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    //     if (prevState.url !== this.state.url) {
    //         await this.updateUserData();
    //     }
    // }

    render() {
        this.updateUserData();
        return (
            <WebView
                source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=a34ccf491aadd2c&response_type=token&state=callback'}}
                onNavigationStateChange={(navEvent) => {
                    this.setState({
                        url: navEvent.url,
                        loading: false
                    });
                }}
            />
        )
    }

    async updateUserData() {
        if (!this.state.loading) {
            const params = this.parseUrl(this.state.url);
            await this.storeSession(JSON.stringify(params));
        }
        let session = this.getSession();
        await session.then((v) => console.log('session : ' + v));
    }

    async storeSession(sessionData) {
        try {
            await AsyncStorage.setItem('session', sessionData);
        } catch (error) {
            console.log('error in set' + error);
        }
    }

    async getSession() {
        try {
            const session = await AsyncStorage.getItem('session');
            if (session !== null) {
                return session;
            } else {
                console.log('session is null');
            }
        } catch (error) {
            console.log('error in get: ' + error);
        }
        return '';
    }

    parseUrl(url) {
        const regex = /[?&]([^=#]+)=([^&#]*)/g;
        let params = {};
        let match = regex.exec(url);
        while (match) {
            params[match[1]] = match[2];
            match = regex.exec(url);
        }
        return params;
    }
}
