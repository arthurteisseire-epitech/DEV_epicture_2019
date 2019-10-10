import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hellooo from './app/HelloName'

export default class App extends Component {
    render() {
        return (

            <View style = {styles.container}>
                <Text>ABC</Text>
                <Hellooo name='Pierre'/>
                <Hellooo name='Maurice'/>
                <Hellooo name='Didier'/>
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
