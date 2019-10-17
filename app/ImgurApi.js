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

    // TODO Favoris, up/down vote, image de profile
}
