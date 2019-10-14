import React, {Component} from 'react'
import {WebView} from 'react-native-webview';

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

    updateUserData() {
        if (!this.state.loading) {
            const regex = /[?&]([^=#]+)=([^&#]*)/g;
            let params = {};
            let match = regex.exec(this.state.url);
            while (match) {
                params[match[1]] = match[2];
                match = regex.exec(this.state.url);
            }
            this.setState({
                account_id: params.account_id,
                account_username: params.account_username,
                refresh_token: params.refresh_token,
                access_token: params.access_token,
            }, this.setState({loading: true}));
        }
    }

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
}
