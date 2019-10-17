import React, {Component} from 'react'
import {View, Button} from 'react-native'
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
    takePhoto() {
        ImagePicker.launchCamera(options, (response) => {console.log(response)});
    }

    render() {
        return (
            <View>
                <Button
                    title={"Take a photo"}
                    onPress={() => this.takePhoto()}
                />
            </View>
        )
    }
}