import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'

export default class ImgurPost extends Component {
    constructor(props) {
        super(props);
    }

    displayImageIfExist(jsonData) {
        if (jsonData.images !== undefined)
            return <Image style={{width: 300, height: 300}} source={{uri: this.props.jsonData.images[0].link}}/>;
        return null;
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#226B74", padding: 10}}>
                <Text> {this.props.jsonData.title} </Text>
                {this.displayImageIfExist(this.props.jsonData)}
            </View>
        )
    }
}