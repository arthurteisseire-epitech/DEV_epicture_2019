import React, {Component} from 'react'
import {Text, View, FlatList, TextInput, StyleSheet} from 'react-native'
import ImgurApi from "./ImgurApi";
import ImgurPost from "./ImgurPost";
import Session from "./Session";

export default class ImgurFeed extends Component {
    constructor(props) {
        super(props);
        this.api = new ImgurApi;
        this.state = {
            jsonPosts: [],
            loading: true,
            images: [],
            feedName: ''
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.FeedSearchBar}
                    placeholder="Look for a feed !"
                    onSubmitEditing={(t) => this.setState({feedName: t.nativeEvent.text, loading: true})}
                />
                {this.state.images}
            </View>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.feedName !== this.state.feedName) {
            // Session.get().then((session) => console.log(session));
            this.api.get(this.state.feedName).then((response) => {
                this.setState({
                    jsonPosts: response.data.items,
                    loading: false
                });
            }, (error) => {
                console.log(error);
            });
        }
        if (prevState.loading !== this.state.loading)
            this.updateImages();
    }

    updateImages() {
        if (this.state.loading) {
            this.state.images = (
                <View style={styles.FeedStyle}>
                    <Text>Loading images…</Text>
                </View>
            )
        } else {
            this.state.images = (
                <FlatList
                    style = {styles.FeedStyle}
                    data={this.state.jsonPosts}
                    renderItem={(jsonPost) => <ImgurPost jsonData={jsonPost.item}/>}
                />
            );
            this.setState({loading: false});
        }
    }
};

const styles = StyleSheet.create({
    FeedStyle: {
        backgroundColor: '#003247',
    },
    FeedSearchBar: {
        backgroundColor: '#FFFFB8',
    },
});