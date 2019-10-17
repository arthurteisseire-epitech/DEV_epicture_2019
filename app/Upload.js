import React, {Component} from 'react'
import {View, Button, Image, Text} from 'react-native'
import ImagePicker from 'react-native-image-picker'

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathToImg: 'images'
        }
    }

    displayImage() {
        if (this.state.pathToImg !== 'images')
            return (
                <Image style={{width: 300, height: 300}} source={{uri: this.state.pathToImg}}/>
            );
        else
            return (
                <Text>image here...</Text>
            );
    }

    takePhoto() {
        ImagePicker.launchCamera(options, (response) => {
            this.setState({pathToImg: response.uri});
        });
    }

    render() {
        return (
            <View>
                <Button
                    title={"Take a photo"}
                    onPress={() => this.takePhoto()}
                />
                {this.displayImage()}
            </View>
        )
    }
}