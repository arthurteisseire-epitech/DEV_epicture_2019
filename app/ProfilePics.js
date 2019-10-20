import React, {PureComponent} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import ImgurApi from './ImgurApi';

export default class ProfilePics extends PureComponent {
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
    return (
      <Image
        style={styles.PostImage}
        source={{uri: this.props.jsonData.item.link}}
      />
    );
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
    PostImage: {
      paddingTop: 10,
      width: 370,
      height: 370,
    },
  })
;