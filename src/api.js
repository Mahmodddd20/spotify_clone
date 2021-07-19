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

    getArtists: (id) =>
        axios.get(`${SEARCH_BASE_URL}artists/${id}/albums?include_groups=single%2Cappears_on&market=ES&limit=${limit}&offset=5`, options),

    getArtistName: (id) =>
        axios.get(`${SEARCH_BASE_URL}artists/${id}`, options),

}