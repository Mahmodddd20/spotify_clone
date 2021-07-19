# spotify_clone

1. Clone the repositry `git clone https://github.com/Mahmodddd20/spotify_clone.git`
2. Move to inside the spotify_clone folder  `cd spotify_clone`
3. Install dependences `npm install`
4. Go to [spotify developers site](https://developer.spotify.com/dashboard/login)
5. Register your App
6. Copy the Client ID to `spotify-clone/src/pages/Login.js` to CLIENT_ID variable
7. In the [spotify developers site](https://developer.spotify.com/dashboard/login) click on ` EDIT SETTINGS`
8. In **Website** field add `http://localhost:3000/` or what ever is the app URL
9. In **Redirect URIs** field add `http://localhost:3000/search` or what ever is the app `http://URL/search`
10. Click on SAVE button
11. In the spotify_clone folder run the command `npm start`
12. Enjoy.


**note:**
if your app URL diffrent than `http://localhost:3000/` then you need to add it to
- `PROJECT_URL` variable in `spotify-clone/src/pages/Login.js`
-  `PROJECT_URL` variable in `spotify-clone/src/pages/Search.js`
