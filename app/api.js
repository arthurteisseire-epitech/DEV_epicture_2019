var rootUrl = 'https://api.imgur.com/3/gallery/t/';
var apiKey = 'a34ccf491aadd2c';

module.exports = {
    get (url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + apiKey
            }
        })
            .then((response) => {
                return response.json()
            })
    }
};