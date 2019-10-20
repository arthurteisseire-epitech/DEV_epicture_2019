import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Session from './Session';

export default class ImgurProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account_name: '',
    };
  }

  componentDidMount(): void {
    Session.get().then((session) => {
      console.log("session: " + session);
      this.setState({account_name: JSON.parse(session).account_username})
    });

    }

  render() {
    return (
      <View>
        <Text> Logged as {this.state.account_name} </Text>
      </View>
    )
  }
}
