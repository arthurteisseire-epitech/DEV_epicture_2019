import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, StyleSheet} from 'react-native';
import ImgurApi from './ImgurApi';
import ImgurPost from './ImgurPost';
import wording from './utils/wording'

export default class ImgurFeed extends Component {
    constructor(props) {
        super(props);
        this.api = new ImgurApi;
        this.state = {
            jsonPosts: [],
            loading: false,
            images: [],
            text: [],
            feedName: '',
        };
    }

    render() {
        return (
            <View style={{justifyContent: 'space-between'}}>
                {/*<View style={{flex: 1, width: 500, height: 500, backgroundColor: 'blue'}}>*/}
                <TextInput
                    style={styles.FeedSearchBar}
                    placeholder={wording.feedPlaceHolder}
                    onSubmitEditing={(t) => this.setState({feedName: t.nativeEvent.text, loading: true})}
                />
                {this.state.text}
                {this.state.images}
                {/*</View>*/}
                {/*<NavBar/>*/}
            </View>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.feedName !== this.state.feedName) {
            this.api.getFeed(this.state.feedName).then((response) => {
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
            this.setState({
                text: <Text>{wording.loadingImages}</Text>
            });
        } else {
            this.setState({
                text: <Text>{wording.imagesLoaded}</Text>
            });
            this.setState({
                images:
                    <FlatList
                        style={styles.FeedStyle}
                        data={this.state.jsonPosts}
                        initialNumToRender={2}
                        windowSize={3}
                        renderItem={(jsonPost) => <ImgurPost jsonData={jsonPost.item}/>}
                    />
            });
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