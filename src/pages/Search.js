import React, {useEffect} from 'react';

function getToken(hash) {

    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");

    return paramsInUrl;

}


function Search() {

    useEffect(() => {

            const {access_token, expires_in, token_type} =
                getToken(window.location.hash);

    }, []);

    return (
        <div className="grid grid-row-7 m-4 container justify-items-center">
            <div className="row-span-2 flex relative border border-gray-200
            w-72 px-2 py-2 rounded m-4 shadow-sm text-sm text-gray-900">
                <input className={`w-full placeholder-gray-900 text-sm`}
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
        </div>
    );
}

export default Search;