export default class ImgurApi {
    constructor() {
        this.apiKey = 'a34ccf491aadd2c';
        this.rootUrl = 'https://api.imgur.com/3/gallery/t/';
    }

    get(url) {
        return fetch(this.rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + this.apiKey
            }
        }).then((response) => {
            return response.json()
        })
    }
}
