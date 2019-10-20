import {CLIENT_ID} from 'react-native-dotenv'
import axios from 'axios'
import Session from "./Session";


export default class ImgurApi {
    static getFeed(feedName) {
        return axios.get('https://api.imgur.com/3/gallery/t/' + feedName, {
            headers: {
                'Authorization': 'Client-ID ' + CLIENT_ID
            }
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log('error : ' + error);
        });
    }

    static upload(imgBytes) {
        return Session.get().then((session) => {
            return axios({
                method: 'POST',
                url: 'https://api.imgur.com/3/image',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(session).access_token
                },
                data: {
                    'image': imgBytes,
                }
            }).then((response) => {
                return response.data;
            }).catch((error) => {
                console.log('error : ' + error);
            });
        });
    }

    static addToFavorite(imgId) {
        return Session.get().then((session) => {
            return axios({
                method: 'POST',
                url: 'https://api.imgur.com/3/image/' + imgId + '/favorite',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(session).access_token
                }
            }).then((response) => {
                return response.data;
            }).catch((error) => {
                console.log('error : ' + error);
            });
        });
    }

    static getFavoritesOnPage(page) {
        return Session.get().then((session) => {
            console.log('https://api.imgur.com/3/account/' + JSON.parse(session).account_name + '/favorites/' + page + '/newest');
            return axios({
                method: 'GET',
                url: 'https://api.imgur.com/3/account/' + JSON.parse(session).account_name + '/favorites/' + page + '/newest',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(session).access_token
                }
            }).then((response) => {
                console.log("bearer: " + JSON.parse(session).access_token);
                return response.data;
            }).catch((error) => {
                console.log('error : ' + error);
            });
        });
    }

    static getAvatar(accountName) {
        return Session.get().then((session) => {
            return axios({
                method: 'GET',
                url: 'https://api.imgur.com/3/account/' + accountName + '/avatar',
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(session).access_token
                }
            }).then((response) => {
                return response.data.data.avatar;
            }).catch((error) => {
                console.log('error : ' + error);
            });
        });
    }

    // TODO up/down vote
}
