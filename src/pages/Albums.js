import React, {useEffect, useState} from 'react';
import api from "../api";
import placeholder from "../assets/Spotify_placeholder.png";

function Albums(props) {
    const [name, setName] = useState('');
    const [result, setResult] = useState({});

    useEffect(() => {

        api.getArtistName(props.match.params.id).then(response=>{
            setName(response.data.name)})
        api.getArtists(props.match.params.id).then(response => {
            setResult(response.data.items)})
            .catch(error=>console.log(error))

    }, [props.match.params.id]);

    return (
        <div className="grid grid-row-7 container ">
            <div
                className="m-2 w-72 px-2 py-2 text-gray-900">
                <h1 className="w-full text-2xl">Name</h1>
                <p className="w-full text-sm text-gray-500">Albums</p>
            </div>
        </div>
    );
}

export default Albums;