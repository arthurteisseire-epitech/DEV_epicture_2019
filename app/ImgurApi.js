import axios from 'axios'


export default class ImgurApi {
    constructor() {
        this.apiKey = 'a34ccf491aadd2c';
        this.rootUrl = 'https://api.imgur.com/3/allery/t/';
    }

    get(url) {
        return axios.get(this.rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + this.apiKey
            }
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }
}
