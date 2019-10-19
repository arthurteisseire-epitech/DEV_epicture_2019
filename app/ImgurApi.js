import axios from 'axios'
import Session from "./Session";


export default class ImgurApi {
    constructor() {
        this.apiKey = 'a34ccf491aadd2c';
    }

    get(url) {
        return axios.get('https://api.imgur.com/3/gallery/t/' + url, {
            headers: {
                'Authorization': 'Client-ID ' + this.apiKey
            }
        }).then((response) => {
            console.log('data: ' + response.data);
            return response.data;
        }).catch((error) => {
            console.log('error : ' + error);
        });
    }

    upload(imgBytes) {
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

    addToFavorite(imgId) {
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

    getFavoritesOnPage(page) {
        return Session.get().then((session) => {
            return axios({
                method: 'GET',
                url: 'https://api.imgur.com/3/account/' + JSON.parse(session).account_name + '/favorites/' + page + '/newest',
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

    getAvatar(accountName) {
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
