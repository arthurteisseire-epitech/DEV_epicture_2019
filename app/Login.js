import React, {Component} from 'react'
import {WebView} from 'react-native-webview';
import Session from './Session'
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {url: '', isLoaded: false};
    }

    render() {
        return (
            <WebView
                source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=a34ccf491aadd2c&response_type=token&state=callback'}}
                onNavigationStateChange={(navEvent) => {
                    this.setState({url: navEvent.url});
                }}
            />
        )
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.url !== this.state.url)
            await this.checkConnection();
    }

    async checkConnection() {
        const params = this.parseUrl(this.state.url);
        try {
            await Session.store(JSON.stringify(params));
        } catch (e) {
            console.log(e);
        }
        if ('access_token' in params && !this.state.isLoaded) {
            this.setState({isLoaded: true});
            Actions.replace('upload');
        }
    }

    parseUrl(url) {
        const regex = /[?&#]([^=#]+)=([^&#]*)/g;
        let params = {};
        let match = regex.exec(url);
        while (match) {
            params[match[1]] = match[2];
            match = regex.exec(url);
        }
        return params;
    }
}
