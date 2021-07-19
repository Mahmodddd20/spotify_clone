import axios from 'axios';

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + "TOKEN"
    },
}

export default {
    getResult: (q) =>
        axios.get(`https://api.spotify.com/v1/search?q=${q}&type=artist&market=US&limit=10&offset=5`, options),
}