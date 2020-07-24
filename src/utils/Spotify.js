const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const user_id = process.env.REACT_APP_SPOTIFY_USER_ID;
const redirectUri = 'http://localhost:3000/';
let accessToken;
const Spotify = {
    getAccessToken(){
        if(accessToken) {
            return accessToken;
        } 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } 
         else {
             const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
             window.location = accessUrl;
         }
    },
    getMyPlayLists(){
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}`};
        return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
            headers: headers
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            const playLists = jsonResponse.items.map(playList => {
                return {
                id: playList.id,
                name: playList.name
                }
            });
            return playLists;
        })
    }
};

export default Spotify;