import React, {Component} from 'react'
import {View, Button, Image, Text} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import ImgurApi from "./ImgurApi";
import wording from './utils/wording'

export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.api = new ImgurApi;
        this.state = {
            img: [],
            uploading: false
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
                {this.displayImage()}
                <Button
                    title={wording.uploadTitle}
                    onPress={() => this.uploadPhoto()}
                />
                {this.notifyPhotoIsUploading()}
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
        if (this.state.img && this.state.img.length > 0)
            return <Image style={{width: 300, height: 300}} source={{uri: this.state.img.uri}} testID={wording.imgToUploadId}/>;
        return [];
    }

    uploadPhoto() {
        this.api.upload(this.state.img.data).then((response) => {
            this.setState({
                img: [],
                uploading: false
            });
        });
        this.setState({uploading: true});
    }

    notifyPhotoIsUploading() {
        if (this.state.uploading === true)
            return <Text>{wording.uploadingPhoto}</Text>;
        return []
    }
}