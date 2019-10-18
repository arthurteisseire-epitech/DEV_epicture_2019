import React, {Component} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import ImgurApi from './ImgurApi';

export default class ImgurPost extends Component {
  constructor(props) {
    super(props);
    this.api = new ImgurApi;
    this.state = {
      avatar_url: '',
    };
  }

  componentDidMount(): void {
    this.api.getAvatar(this.props.jsonData.account_url).then((avatar) => {
      this.setState({avatar_url: avatar});
    });

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
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.avatarIcon}
            source={{uri: this.state.avatar_url}}
          />
          <View style={{flex: 4, flexDirection: 'column'}}>
            <Text style={{color: '#FFF'}}> {this.props.jsonData.account_url} </Text>
            <Text style={styles.PostTitle}> {this.props.jsonData.title} </Text>
          </View>
        </View>
        {this.displayImageIfExist(this.props.jsonData)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    PostBox: {
      borderColor: '#000000',
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
      padding: 10,
    },
    avatarIcon: {
      paddingTop: 25,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
  })
;