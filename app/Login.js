import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};
    }

    ValidLogin() {
        return this.state.login === "toto" && this.state.password === "tata";
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter your login"
                    onSubmitEditing={(t) => this.setState({login: t.nativeEvent.text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter your password"
                    onSubmitEditing={(t) => this.setState({password: t.nativeEvent.text})}
                />
                <Text style={{padding: 10, fontSize: 25}}>
                    {"Your name : " + this.state.login}
                </Text>
                <Text style={{padding: 10, fontSize: 25}}>
                    {"Your password : " + this.state.password}
                </Text>
                <Button title={"Submit"} onPress={this.ValidLogin() ? Actions.flex : null}/>
            </View>
        )
    }
}
