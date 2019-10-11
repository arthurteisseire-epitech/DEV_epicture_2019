import React, {Component} from 'react'
import {Image, Text, View, ScrollView, FlatList} from 'react-native'
import API from './api'


function Item({ title }) {
    return (
        <View>
            <Image style={{width: 50, height: 50}} source={{uri: title}}/>
        </View>
    );
}
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


    getImagesFromSources() {
        var images = this.state.dataSources.map((dataSource) => {
            if (dataSource.images !== undefined && dataSource.images[0].link.match(/\.(jpg|png|gif)/g))
                return dataSource.images[0];
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
                <FlatList
                    data={this.getImagesFromSources()}
                    renderItem={({item}) => <Item title={item.link}/>}
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