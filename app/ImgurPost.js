import React, {Component} from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'

export default class ImgurPost extends Component {
    constructor(props) {
        super(props);
    }

    displayImageIfExist(jsonData) {
        if (jsonData.images !== undefined)
            return <Image
                style={styles.PostImage}
                source={{uri: this.props.jsonData.images[0].link}}/>;
        return null;
    }

    render() {
        return (
            <View style={styles.PostBox}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{color: '#FFF'}}> IMG </Text>
                        <Text style={{color: '#FFF'}}> {this.props.jsonData.account_url} </Text>
                    </View>
                        <Text style={styles.PostTitle}> {this.props.jsonData.title} </Text>
                </View>
                {this.displayImageIfExist(this.props.jsonData)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
        PostBox: {
            borderColor: "#000000",
            borderStyle: 'solid',
            borderWidth: 1,
            padding: 20,
        },
        PostImage: {
            paddingTop: 10,
            width: 370,
            height: 370,
        },
        PostTitle: {
            fontSize: 24,
            color: '#FFF',
            textAlign: 'center',
            padding: 10,
        }
    })
;