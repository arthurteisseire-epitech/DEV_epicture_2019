import React, {Component} from 'react'
import {View, Button, Image, Text} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImgurApi from "./ImgurApi";
import wording from './utils/wording'

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            uploadingMessage: ''
        };
    }

    render() {
        return (
            <View>
                <Button
                    title={wording.takePhotoTitle}
                    onPress={() => this.takePhoto()}
                />
                <Button
                    title={wording.choosePhotoTitle}
                    onPress={() => this.choosePhotoFromGallery()}
                />
                {this.displayPhoto()}
                <Button
                    title={wording.uploadTitle}
                    testID={wording.uploadTitle}
                    onPress={() => this.uploadPhoto()}
                />
                {this.notifyPhotoIsUploading()}
            </View>
        )
    }

    choosePhotoFromGallery() {
        ImagePicker.launchImageLibrary({}, (response) => {
            this.setState({
                img: response,
                uploadingMessage: ''
            });
        });
    }

    takePhoto() {
        ImagePicker.launchCamera({}, (response) => {
            this.setState({
                img: response,
                uploadingMessage: ''
            });
        });
    }

    displayPhoto() {
        if (this.state.img)
            return <Image style={{width: 300, height: 300}} source={{uri: this.state.img.uri}} testID={wording.imgToUploadId}/>;
        return [];
    }

    uploadPhoto() {
        if (this.state.uploadingMessage !== wording.uploadingPhoto) {
            if (this.state.img) {
                ImgurApi.upload(this.state.img.data).then((response) => {
                    this.setState({
                        img: null,
                        uploadingMessage: ''
                    });
                });
                this.setState({uploadingMessage: wording.uploadingPhoto});
            } else {
                this.setState({uploadingMessage: wording.needPhotoToUpload});
            }
        }
    }

    notifyPhotoIsUploading() {
        if (this.state.uploadingMessage)
            return <Text>{this.state.uploadingMessage}</Text>;
        return []
    }
}