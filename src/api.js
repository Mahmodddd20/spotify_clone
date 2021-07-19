import axios from 'axios';

const SEARCH_BASE_URL = "https://api.spotify.com/v1/";
const SEARCH_TYPE = "artist";
const TOKEN = localStorage.getItem('accessToken');

const options = {
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
    },
}

export default {
    getResult: (q,limit) =>
        axios.get(`${SEARCH_BASE_URL}search?q=${q}&type=${SEARCH_TYPE}&market=US&limit=${limit}&offset=5`, options),

    getArtists: (id,limit) =>
        axios.get(`${SEARCH_BASE_URL}artists/${id}/albums?include_groups=single%2Cappears_on&market=ES&limit=${limit}&offset=5`, options),

    getArtistName: (id) =>
        axios.get(`${SEARCH_BASE_URL}artists/${id}`, options),

}