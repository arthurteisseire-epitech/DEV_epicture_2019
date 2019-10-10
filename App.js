import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hellooo from './app/HelloName'
import FlexTest from "./app/FlexTest";
import Login from "./app/Login";

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Login/>
                <FlexTest style={{flex: 1}}/>

                <View style={{flex: 1}}>
                    <Text>ABC</Text>
                    <Hellooo name='Pierre'/>
                    <Hellooo name='Maurice'/>
                    <Hellooo name='Didier'/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
