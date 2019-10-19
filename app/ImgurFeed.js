import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, StyleSheet} from 'react-native';
import ImgurApi from './ImgurApi';
import ImgurPost from './ImgurPost';

export default class ImgurFeed extends Component {
    constructor(props) {
        super(props);
        this.api = new ImgurApi;
        this.state = {
            jsonPosts: [],
            loading: true,
            images: [],
            feedName: '',
        };
    }

    render() {
        return (
            <View style={{justifyContent: 'space-between'}}>
                {/*<View style={{flex: 1, width: 500, height: 500, backgroundColor: 'blue'}}>*/}
                <TextInput
                    style={styles.FeedSearchBar}
                    placeholder="Look for a feed !"
                    onSubmitEditing={(t) => this.setState({feedName: t.nativeEvent.text, loading: true})}
                />
                {this.state.images}
                {/*</View>*/}
                {/*<NavBar/>*/}
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.feedName !== this.state.feedName) {
            this.api.get(this.state.feedName).then((response) => {
                this.setState({
                    jsonPosts: response.data.items,
                    loading: false,
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
            );
        } else {
            this.state.images = (
                <FlatList
                    style={styles.FeedStyle}
                    data={this.state.jsonPosts}
                    initialNumToRender={2}
                    windowSize={3}
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