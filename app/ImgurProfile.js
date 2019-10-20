import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Session from './Session';
import ImgurApi from './ImgurApi';
import wording from './utils/wording';
import FavPost from './FavPost';
import ProfilePics from './ProfilePics';

export default class ImgurProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_name: '',
      jsonPics: [],
      loading: true,
      images: [],
    };
  }

  componentDidMount() {
    Session.get().then((session) => {
      this.setState({account_name: JSON.parse(session).account_username});
    });
    ImgurApi.getAccountPics().then((response) => {
      this.setState({
        jsonPics: response.data,
        loading: false,
      });
      this.updateImages();
    }, (error) => {
      console.log(error);
    });
  }

  updateImages() {
    if (this.state.loading) {
      this.setState({
        text: <Text>{wording.loadingImages}</Text>,
      });
    } else {
      this.setState({
        text: <Text>{wording.imagesLoaded}</Text>,
      });
      this.setState({
        images:
          <FlatList
            style={styles.FeedStyle}
            data={this.state.jsonPics}
            initialNumToRender={4}
            windowSize={5}
            renderItem={(jsonPic) => <ProfilePics jsonData={jsonPic}/>}
          />,
      });
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', padding: 10, fontSize: 24}}> {this.state.account_name}'s pictures : </Text>
        {this.state.images}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  FeedStyle: {
    backgroundColor: '#003247',
  },
});
