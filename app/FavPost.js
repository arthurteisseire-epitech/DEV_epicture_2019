import React, {PureComponent} from 'react';
import {Image, Text, View, StyleSheet, Button, TouchableHighlight} from 'react-native';
import ImgurApi from './ImgurApi';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class FavPost extends PureComponent {
  constructor(props) {
    super(props);
    this.imgRegex = /.*\.(jpeg|png|jpg)$/;
    this.state = {
      avatar_url: 'not_defined',
    };
  }

  componentDidMount() {
      ImgurApi.getAvatar(this.props.jsonData.item.account_url).then((avatar) => {
        this.setState({avatar_url: avatar});
      });
  }

  displayImageIfExist() {
    if (this.props.jsonData.item.images !== undefined && this.imgRegex.test(this.props.jsonData.item.link)) {
      return (
        <Image
          style={styles.PostImage}
          source={{uri: this.props.jsonData.item.link}}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.PostBox}>
        {this.displayImageIfExist()}
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
    VoteArrow: {
      width: 30,
      height: 30,
      paddingTop: 5,
      color: 'white',
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
      alignItems: 'center',
    },
  })
;