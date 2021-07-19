import React, {useEffect, useLayoutEffect, useState} from "react";
import api from "../api";
import placeholder from "../assets/Spotify_placeholder.png";

export default function Albums(props) {
    const [name, setName] = useState('');
    const [result, setResult] = useState({});
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        api.getArtistName(props.match.params.id).then(response => {
            setName(response.data.name)})

        api.getArtists(props.match.params.id, limit).then(response => {
            setResult(response.data.items)
        }).catch(error => console.log(error))

    }, [props.match.params.id, limit]);

    useLayoutEffect(() => {
        window.onscroll = () => {
            if(limit<100){
                setLimit(limit + 10)
            }
        }
    }, [result]);

    function renderAlbums() {
        return result.map(value => {
            return (
                <div key={value.id} className="border border-gray-200 rounded m-4 shadow-sm w-52">
                    <div className=" w-full h-40">
                        <img className="border border-gray-200 w-full h-40 object-cover"
                             alt="image"
                             src={value.images.length == 0 ? placeholder : value.images[0].url}/>
                    </div>
                    <div className="bg-white w-full h-40">
                        <p className="mx-2 text-gray-900">{value.name}</p>
                        <ul className="mx-2 text-xs text-gray-500">
                            {value.artists.map(artist => {
                                return <li key={artist.id}>{artist.name}</li>
                            })}
                        </ul>
                        <p className="m-2 text-xs text-gray-600"> {value.release_date}</p>
                        <p className="m-2 text-xs text-gray-600"> {value.total_tracks} tracks</p>
                    </div>
                    <div className=" w-full h-8 bg-gray-200 text-gray-500 text-xs text-center py-2">
                        <a href={value.external_urls.spotify}>Preview on Spotify</a>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="grid grid-row-7 container ">
            <div
                className="m-2 w-72 px-2 py-2 text-gray-900">
                <h1 className="w-full text-2xl">{name}</h1>
                <p className="w-full text-sm text-gray-500">Albums</p>
            </div>
            <div className="row-span-5 flex flex-wrap">
                {result.length > 0 ? renderAlbums() : "no result"}
            </div>
        </div>
    );
}

