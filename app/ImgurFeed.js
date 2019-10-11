import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
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

    render() {
        if (this.state.loading) {
            this.state.images = (
                <View>
                    <Text>Loading images…</Text>
                </View>
            )
        }
        if (!this.state.loading) {
            this.state.images = (
                <View>
                    <Image
                        style={{width: 200, height: 200}}
                        source={{uri: this.state.dataSources[4].images[0].link}}/>
                </View>
            )
        }
        return (
            <View>
                {this.state.images}
            </View>
        )
    }
};