import React, {Component} from 'react';
import {View} from 'react-native';
import Login from "./app/Login";
import {Router, Scene, Stack} from 'react-native-router-flux'
import ImgurFeed from "./app/ImgurFeed";

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Router>
                    <Stack key="root">
                        <Scene key="login" component={Login} title="Login"/>
                        <Scene key="feed" component={ImgurFeed} title="henry"/>
                    </Stack>
                </Router>
            </View>
        );
    }
}
