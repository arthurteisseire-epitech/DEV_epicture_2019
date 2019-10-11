import React, {Component} from 'react'
import {Text, View, FlatList} from 'react-native'
import API from './api'
import ImgurPost from "./ImgurPost";


export default class ImgurFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonPosts: [],
            loading: true,
            images: []
        };
    }

    componentDidMount() {
        API.get("cats").then((response) => {
            this.setState({jsonPosts: response.data.items});
            this.setState({loading: false});
        }, (error) => {
            console.log(error);
        });
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
                <FlatList
                    data={this.state.jsonPosts}
                    renderItem={(jsonPost) => <ImgurPost jsonData={jsonPost.item}/>}
                />
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