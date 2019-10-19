import React, {Component} from 'react'
import {View, Button, Image, Text} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImgurApi from "./ImgurApi";

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.api = new ImgurApi;
        this.state = {
            img: []
        };
    }

    render() {
        return (
            <View>
                <Button
                    title={"Take a photo"}
                    onPress={() => this.takePhoto()}
                />
                <Button
                    title={"Choose a photo"}
                    onPress={() => this.choosePhotoFromGallery()}
                />
                {this.displayImage()}
                <Button
                    title={"Upload"}
                    onPress={() => this.uploadPhoto()}
                />
            </View>
        )
    }

    choosePhotoFromGallery() {
        ImagePicker.launchImageLibrary({}, (response) => {
            this.setState({img: response});
        });
    }

    takePhoto() {
        ImagePicker.launchCamera({}, (response) => {
            this.setState({img: response});
        });
    }

    displayImage() {
        if (this.state.img !== 'images')
            return (
                <Image style={{width: 300, height: 300}} source={{uri: this.state.img.uri}}/>
            );
        else
            return (
                <Text>image here...</Text>
            );
    }

    uploadPhoto() {
        this.api.upload(this.state.img.data).then((response) => {
            console.log(JSON.stringify(response));
        });
    }
}