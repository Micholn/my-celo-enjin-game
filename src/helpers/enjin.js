const Enjin = require('@enjin/sdk');

const enjin = new Enjin({
    baseURL: 'https://cloud.enjin.io/',
    key: '<YOUR_ENJIN_API_KEY>',
});

module.exports = enjin;
