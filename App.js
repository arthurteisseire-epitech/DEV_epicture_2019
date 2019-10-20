import React, {Component} from 'react';
import {View} from 'react-native';
import Login from "./app/Login";
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux'
import ImgurFeed from "./app/ImgurFeed";
import Upload from "./app/Upload";
import TabBar from './app/TabBar';
import ImgurFav from './app/ImgurFav';
import ImgurProfile from './app/ImgurProfile';
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
                            hideNavBar
                        >
                            <Scene
                                key="feed"
                                title="Feed"
                                component={ImgurFeed}
                                hideNavBar
                            />
                            <Scene
                                key="upload"
                                title="Upload"
                                component={Upload}
                                hideNavBar
                            />
                            <Scene
                              key="fav"
                              title="Fav"
                              component={ImgurFav}
                              hideNavBar
                            />
                            <Scene
                              key="profile"
                              title="Profile"
                              component={ImgurProfile}
                              hideNavBar
                            />
                        </Tabs>
                    </Stack>
                </Router>
            </View>
        );
    }
}
