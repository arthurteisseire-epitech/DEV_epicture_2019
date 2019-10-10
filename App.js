import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Hellooo from './app/HelloName'
import FlexTest from "./app/FlexTest";
import Login from "./app/Login";
import ButtonTest from "./app/ButtonTest";
import {Router, Scene, Stack} from 'react-native-router-flux'

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Router>
                    <Stack key="root">
                        <Scene key="login" component={Login} title="Login"/>
                        <Scene key="flex" component={FlexTest} title="henry"/>
                        <Scene key="home" component={ButtonTest}/>
                    </Stack>
                </Router>

                {/*<Login/>*/}
                {/*<ButtonTest/>*/}
                {/*<FlexTest style={{flex: 1}}/>*/}

                {/*<View style={{flex: 1}}>*/}
                {/*    <Text>ABC</Text>*/}
                {/*    <Hellooo name='Pierre'/>*/}
                {/*    <Hellooo name='Maurice'/>*/}
                {/*    <Hellooo name='Didier'/>*/}
                {/*</View>*/}
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
