import React, {Component} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import Session from './Session';
import ImgurApi from './ImgurApi';
import ProfilePics from './ProfilePics';
import Cookie from "react-native-cookie";
import {Actions} from "react-native-router-flux";

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
                text: <Text>Loading images...</Text>,
            });
        } else {
            this.setState({
                text: <Text>Images are loaded !</Text>,
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

    disconnection() {
        Cookie.clear();
        Session.clear().then(() => Actions.reset('login'));
    }

    render() {
        return (
            <View>
                <Button
                    title={"Disconnection"}
                    onPress={() => this.disconnection()}
                />
                <Text style={{textAlign: 'center', padding: 10, fontSize: 24}}> {this.state.account_name}'s pictures
                    : </Text>
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
