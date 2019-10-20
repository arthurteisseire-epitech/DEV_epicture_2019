import React, {Component} from 'react';
import {Text, View, FlatList, Button, StyleSheet} from 'react-native';
import ImgurApi from './ImgurApi';
import wording from './utils/wording';
import FavPost from './FavPost';

export default class ImgurFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonFavs: [],
      loading: true,
      images: [],
      text: [],
      page_id: 0,
    };
  }

  componentDidMount() {
    ImgurApi.getFavoritesOnPage(this.state.page_id).then((response) => {
      this.setState({
        jsonFavs: response.data,
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
            data={this.state.jsonFavs}
            initialNumToRender={4}
            windowSize={5}
            renderItem={(jsonFav) => <FavPost jsonData={jsonFav}/>}
          />,
      });
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Button
          title="Refresh favs"
          style={{backgroundColor: 'red'}}
          onPress={() => {
            ImgurApi.getFavoritesOnPage(this.state.page_id).then((response) => {
              this.setState({
                jsonFavs: response.data,
                loading: false,
              });
              this.updateImages();
            }, (error) => {
              console.log(error);
            })
          }}
        />
        {this.state.text}
        {this.state.images}
      </View>
    );
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
