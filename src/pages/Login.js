import React from 'react';
import icon from "../assets/Spotify_Icon.png"

function Login() {
    const CLIENT_ID = "93ff98fdec2345148e7b120be10be630"
    const SPOTIFY_URL = "https://accounts.spotify.com/authorize"
    const PROJECT_URL = "http://localhost:3000/"
    const SPACE_BETWEEN_SCOPES = "%20";
    const SCOPES = [
        "user-read-currently-playing",
        "user-read-playback-state",
        "playlist-read-private"
    ];

    const SCOPES_WITH_SPACES = SCOPES.join(SPACE_BETWEEN_SCOPES);


    function handleLogin() {
        window.location = `${SPOTIFY_URL}?client_id=${CLIENT_ID}&redirect_uri=${PROJECT_URL}search&scope=${SCOPES_WITH_SPACES}&response_type=token&show_dialog=true`;
    };

    return (
        <div className="grid grid-col-1 grid-row-1 ">
            <button onClick={handleLogin}
                    className=" border border-gray-400 w-60 px-2 py-2 rounded m-4 shadow-sm text-2xl text-gray-900 ">
                <span className="flex w-full px-4  relative">
                    Login
                    <img alt="icon" className="h-6 w-6 absolute right-0" src={icon}/>
                </span>
            </button>
        </div>
    );
}

export default Login;