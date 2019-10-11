import React, {Component} from 'react'
import {Image, Text, View, ScrollView} from 'react-native'
import API from './api'

export default class ImgurFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSources: [],
            loading: true,
            images: []
        };
    }

    componentDidMount() {
        API.get("cats").then((response) => {
            this.setState({dataSources: response.data.items});
            this.setState({loading: false});
        }, (error) => {
            console.log(error);
        });

    }

    getImage(image) {
        return <Image
            style={{width: 200, height: 200}}
            source={{uri: image.link}}/>
    }

    getImagesFromSources(func) {
        var images = this.state.dataSources.map((dataSource) => {
            if (dataSource.images !== undefined && dataSource.images[0].link.match(/\.(jpg|png|gif)/g))
                return func(dataSource.images[0]);
            else
                return null;
        });
        return images.filter((image) => {
            return image != null;
        })
    }

    updateImages() {
        if (this.state.loading) {
            this.state.images = (
                <View>
                    <Text>Loading images…</Text>
                </View>
            )
        }
        if (!this.state.loading) {
            this.state.images = (
                <ScrollView>
                    {this.getImagesFromSources(this.getImage)}
                </ScrollView>
            )
        }
    }

    render() {
        this.updateImages();
        return (
            <View>
                {this.state.images}
            </View>
        )
    }
};