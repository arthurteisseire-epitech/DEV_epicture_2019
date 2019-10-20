import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, StyleSheet} from 'react-native';
import ImgurApi from './ImgurApi';
import ImgurPost from './ImgurPost';
import wording from './utils/wording';

export default class ImgurFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonFavs: [],
      loading: false,
      images: [],
      text: [],
      page_id: 0,
    };
  }

  componentDidMount() {
    ImgurApi.getFavoritesOnPage(this.state.page_id).then((response) => {
      console.log("heyyy");
      console.log(response.data);
      // this.setState({});
    });
  }

  render() {
    return (
      <View>
        <Text> nothing </Text>
      </View>
    );
  }
}
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevState.feedName !== this.state.feedName) {
  //     ImgurApi.getFeed(this.state.feedName).then((response) => {
  //       this.setState({
  //         jsonPosts: response.data.items,
  //         loading: false,
  //       });
  //     }, (error) => {
  //       console.log(error);
  //     });
  //   }
  //   if (prevState.loading !== this.state.loading)
  //     this.updateImages();
  // }
//
//   updateImages() {
//     if (this.state.loading) {
//       this.setState({
//         text: <Text>{wording.loadingImages}</Text>
//       });
//     } else {
//       this.setState({
//         text: <Text>{wording.imagesLoaded}</Text>
//       });
//       this.setState({
//         images:
//           <FlatList
//             style={styles.FeedStyle}
//             data={this.state.jsonPosts}
//             initialNumToRender={4}
//             windowSize={5}
//             renderItem={(jsonPost) => <ImgurPost jsonData={jsonPost.item}/>}
//           />
//       });
//       this.setState({loading: false});
//     }
//   }
// };

  // const;
  // styles = StyleSheet.create({
  //   FeedStyle: {
  //     backgroundColor: '#003247',
  //   },
  //   FeedSearchBar: {
  //     backgroundColor: '#FFFFB8',
  //   },
  // });