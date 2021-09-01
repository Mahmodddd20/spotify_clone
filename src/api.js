import axios from 'axios';

const SEARCH_BASE_URL = process.env.REACT_APP_SEARCH_BASE_URL;
const SEARCH_TYPE = process.env.REACT_APP_SEARCH_TYPE;
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