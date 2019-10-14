import React, {Component} from 'react'
import {WebView} from 'react-native-webview';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    render() {
        return (
            <WebView
                source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=a34ccf491aadd2c&response_type=token&state=toto'}}
                style={{marginTop: 20}}
                onMessage={(event) => console.log(event.nativeEvent.data.url)}
            />
        )
    }
}
