import React, {useEffect, useLayoutEffect, useState} from "react";
import api from "../api";
import placeholder from "../assets/Spotify_placeholder.png"
import {AiFillStar} from 'react-icons/ai';

function getToken(hash) {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");

    return paramsInUrl.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
    }, {});
}

export default function Search() {
    const PROJECT_URL = process.env.REACT_APP_PROJECT_URL

    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(10);
    const [result, setResult] = useState({});
    const [style, setStyle] = useState("text-center");

    useEffect(() => {
        if (window.location.hash) {
            const {access_token, expires_in, token_type} =
                getToken(window.location.hash);

            localStorage.clear();
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    }, []);

    useEffect(() => {
        if (search.length > 0) {
            api.getResult(search, limit).then(response => {
                setResult(response.data.artists.items)
            });

            AllArtists();
        }
    }, [search, limit]);

    useLayoutEffect(() => {
        window.onscroll = () => {
            if (limit < 100) {
                setLimit(limit + 10)
            }
        }
    }, [result]);

    function stars(rating) {
        return (
            <div className="flex m-2">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <AiFillStar
                            color={ratingValue > Math.round(rating / 20)
                                ? 'grey' : 'yellow'}/>);
                })}
            </div>
        )
    }

    function AllArtists() {
        if (result.length > 0) {
            return (result.map(value => {
                return (
                    <div className="border border-gray-200 rounded m-4 shadow-sm w-52">
                        <a href={`${PROJECT_URL}albums/${value.id}`}>
                            <div className=" w-full h-40">
                                <img className="border border-gray-200 w-full h-40 object-cover"
                                     alt={value.images}
                                     src={value.images.length == 0 ? placeholder : value.images[0].url}/>
                            </div>
                            <div className="bg-white w-full h-20">
                                <p className="m-2 text-gray-900">{value.name}</p>
                                <p className="m-2 text-xs text-gray-600">{value.followers.total} followers</p>
                            </div>
                            <div className=" bg-white w-full h-8">
                                {stars(value.popularity)}
                            </div>
                        </a>
                    </div>
                )
            }))
        }
    }

    return (
        <div className="grid grid-row-7 m-4 container justify-items-center">
            <div className="row-span-2 flex relative border border-gray-200
            w-72 px-2 py-2 rounded m-4 shadow-sm text-sm text-gray-900">
                <input onChange={e => setSearch(e.target.value)} onKeyDown={() => {
                    setStyle("capitalize")
                }}
                       className={`w-full ${style} placeholder-gray-900 text-sm`}
                       placeholder="Search for an artist..."
                       type="text"/>
                <svg aria-hidden="true"
                     className="w-4 h-4 text-gray-400 absolute right-2 bottom-2.5"
                     role="img"
                     viewBox="0 0 512 512">
                    <path
                        d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                        fill="currentColor">
                    </path>
                </svg>
            </div>
            <div className="row-span-5 flex flex-wrap">
                {result.length > 0 ? AllArtists() : "No Result Yet"}
            </div>
        </div>
    );
}

