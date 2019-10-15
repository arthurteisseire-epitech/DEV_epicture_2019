import axios from 'axios'


export default class ImgurApi {
    constructor() {
        this.apiKey = 'a34ccf491aadd2c';
        this.rootUrl = 'https://api.imgur.com/3/gallery/t/';
    }

    get(url) {
        return axios.get(this.rootUrl + url, {
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
}
