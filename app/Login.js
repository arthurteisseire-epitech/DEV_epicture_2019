import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
} from 'react-native'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Enter your login"
                    onSubmitEditing={(t) => this.setState({text: t.nativeEvent.text})}
                />
                <Text style={{padding: 10, fontSize: 25}}>
                    {"Your name : " + this.state.text}
                </Text>
            </View>
        )
    }
}
