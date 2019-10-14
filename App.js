import React, {Component} from 'react';
import {View} from 'react-native';
import Login from "./app/Login";
import ButtonTest from "./app/ButtonTest";
import {Router, Scene, Stack} from 'react-native-router-flux'
import ImgurFeed from "./app/ImgurFeed";

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Router>
                    <Stack key="root">
                        <Scene key="feed" component={ImgurFeed} title="henry"/>
                        <Scene key="login" component={Login} title="Login"/>
                        <Scene key="home" component={ButtonTest}/>
                    </Stack>
                </Router>
            </View>
        );
    }
}
