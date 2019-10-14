import React, {Component} from 'react'
import {Text, View, FlatList, TextInput} from 'react-native'
import API from './api'
import ImgurPost from "./ImgurPost";


export default class ImgurFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonPosts: [],
            loading: true,
            images: [],
            feedName: "cats"
        };
    }

    componentDidMount() {
        API.get(this.state.feedName).then((response) => {
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

    updateFeed(feedName) {
        this.setState({loading: true});
        this.setState({feedName: feedName}, () => this.componentDidMount());
    }

    render() {
        this.updateImages();
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Look for a feed !"
                    onSubmitEditing={(t) => this.updateFeed(t.nativeEvent.text)}
                />
                {this.state.images}
            </View>
        )
    }
};