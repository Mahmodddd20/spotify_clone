import React from 'react';
import icon from "../assets/Spotify_Icon.png"

function Login() {

    function handleLogin() {
        window.location = `https://accounts.spotify.com/authorize?client_id=93ff98fdec2345148e7b120be10be630&redirect_uri=http://localhost:3000/search&scope=user-read-currently-playing%20user-read-playback-state%20playlist-read-private&response_type=token&show_dialog=true`;
    };

    return (
        <div className="grid grid-col-1 grid-row-1 h-full place-items-center 	">
            <button onClick={handleLogin}
                    className=" border border-gray-400 w-60 px-2 py-2 rounded m-4 shadow-sm text-2xl text-gray-900 ">
                <span className="flex w-full px-4 justify-center relative">
                    Login
                    <img alt="icon" className="h-6 w-6 absolute right-0" src={icon}/>
                </span>
            </button>
        </div>
    );
}

export default Login;