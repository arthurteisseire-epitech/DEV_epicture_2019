import React, {Component} from 'react'
import {WebView} from 'react-native-webview';
import Session from './Session'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            loading: true
        };
    }

    render() {
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

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.url !== this.state.url)
            await this.updateUserData();
    }

    async updateUserData() {
        if (!this.state.loading) {
            const params = this.parseUrl(this.state.url);
            try {
                await Session.store(JSON.stringify(params));
            } catch (e) {
                console.log(e);
            }
        }
        Session.get().then((session) => console.log(session));
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
