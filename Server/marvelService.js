const axios = require('axios');
const md5 = require('md5');

const baseMarverUrl = 'https://gateway.marvel.com/v1/public/';
const publicKey = 'de39be87f0e3f1e755455460e7c9557b';
const privateKey = 'bee01243fc90c34bb70a95d0e4171d041ee51b2f';


const axiosInstance = axios.create({
    baseURL: baseMarverUrl,
    timeout: 30000,
});

async function getCharacters(pageNumber, name) {
    let response = {};

    if (name) {
        response = await axiosInstance.get('characters', {
            params: { ...getAuthParams(), name: name }
        });
    }
    else {
        response = await axiosInstance.get('characters', {
            params: { ...getAuthParams(), offset: 20 * (pageNumber - 1), limit: 20 }
        });
    }

    return {
        results: response.data.data.results,
        totalCharacters: response.data.data.total,
        totalPages: Math.ceil(response.data.data.total / 20)
    }
}
async function getCharacter(id) {
    const response = await axiosInstance.get('characters/' + id, {
        params: { ...getAuthParams(), id: id }
    });

    return {
        results: response.data.data.results,
        totalCharacters: response.data.data.total,
        totalPages: Math.ceil(response.data.data.total / 20)
    }
}

function getAuthParams() {
    current_date = new Date()
    ms = current_date.getMilliseconds();
    return {
        ts: ms,
        apikey: publicKey,
        hash: md5(ms + privateKey + publicKey),
    }
}

module.exports = {
    getCharacters,
    getCharacter
}

