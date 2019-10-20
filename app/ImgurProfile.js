import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import Session from './Session';
import Cookie from 'react-native-cookie'
import {Actions} from "react-native-router-flux";

export default class ImgurProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account_name: '',
        };
    }

    componentDidMount() {
        Session.get().then((session) => {
            console.log("session: " + JSON.parse(session).account_name);
            this.setState({account_name: JSON.parse(session).account_name})
        });
    }

    disconnection() {
        Cookie.clear();
        Session.clear().then(() => Actions.reset('login'));
    }

    render() {
        return (
            <View>
                <Text> Logged as {this.state.account_name} </Text>
                <Button
                    title={"Disconnection"}
                    onPress={() => this.disconnection()}
                />
            </View>
        )
    }
}
