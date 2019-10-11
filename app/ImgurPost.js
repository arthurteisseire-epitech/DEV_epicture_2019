import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'

export default class ImgurPost extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image style={{width: 300, height: 300}} source={{uri: image.link}}/>
                    <Text> {image.description} </Text>
                </View>
            </View>
        )
    }
}