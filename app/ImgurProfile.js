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

    componentDidMount() {
        Session.get().then((session) => {
            console.log("session: " + JSON.parse(session).account_username);
            this.setState({account_name: JSON.parse(session).account_username})
        });
    }

  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', padding: 10, fontSize: 24}}> {this.state.account_name}'s pictures : </Text>
      </View>
    )
  }
}
