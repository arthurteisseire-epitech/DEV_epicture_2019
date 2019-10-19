import React, {Component} from 'react';
import {View} from 'react-native';
import Login from "./app/Login";
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux'
import ImgurFeed from "./app/ImgurFeed";
import Upload from "./app/Upload";
import TabBar from './app/TabBar';
/*import NavBar from "app/NavBar"*/

export default class App extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <View style={{flex: 1}}>
                <Router>
                    <Stack key={"root"}>
                        <Scene
                            key="login"
                            title="Login"
                            component={Login}
                        />
                        <Tabs
                            tabBarComponent={TabBar}
                            key={'tabs'}
                            hideNavBar>
                            <Scene
                                key="feed"
                                icon='../img/home'
                                title="Feed"
                                component={ImgurFeed}
                                /*navBar={NavBar}*/
                            />
                            <Scene
                                key="upload"
                                icon='../img/upload'
                                title="Upload"
                                component={Upload}
                                /*navBar={NavBar}*/
                            />
                        </Tabs>
                    </Stack>
                </Router>
            </View>
        );
    }
}
