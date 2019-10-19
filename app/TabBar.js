import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class CustomTabBar extends React.Component {

    keyToImgSrc(key) {
        console.log("KEY MA BITE ", key);
        if (key == 'home') {
            return (require('../img/home.png'))
        } else if (key == 'feed') {
            return (require('../img/home.png'))
        } else if (key == 'upload') {
            return (require('../img/upload.png'))
        } else if (key == 'profile') {
            return (require('../img/profile.png'))
        }
    }

    render() {
        const {state} = this.props.navigation;
        const activeTabIndex = state.index;


        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                {
                    state.routes.map(element => (
                        <TouchableOpacity key={element.key} onPress={() => Actions[element.key]()}>
                            <Image
                                source={this.keyToImgSrc(element.key)}
                                style={{width: 50, height: 50}}
                            />
                            {/*<Text style={{color: 'red'}}> {element.key.toUpperCase()} </Text>*/}
                        </TouchableOpacity>
                    ))
                }
            </View>
        );
    }
}