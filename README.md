# mixTape

An improved Spotify playlist creation experience inspired by old school mixtape creation utilising the Spotify api and React. The result offers an easier way to view the playlist whilst searching for tracks to add to it.


[Here is a link to the live site.](https://mix-tape.netlify.app/)

## User Stories

Users can view all current playlists  
Users can search for tracks by name, artist or album  
Users can select tracks from results with one click to add to the playlist  
Users can remove tracks from playlist before saving if they no longer want it in playlist  


## Getting Started

### Installing

Fork this repository to your own GitHub account  
Clone it to your local machine and cd into it  

    $ git clone <your fork's url>
    $ cd mix-tape

Install all package dependencies  

    $ npm install

The dependencies that will install are:

    @reach/router: ^1.3.4,
    react: ^16.13.1,
    react-dom: ^16.13.1,
    react-scripts: 3.4.1


### Development

Once everything is installed, you can run the app locally

    $ npm start


This will start up the development server and it will open a new browser tab for you with the app running on localhost:3000

To access Spotify you will need to go have a Spotify account and login to [developers dashboard](https://developer.spotify.com/dashboard/login).   

Once you have logged in click create an app.

Insert a name and description for the app and accept terms and conditions once read.

Copy the Client ID and then create a .env file. set the client id within the .env file remembering not to use quotation marks.

        REACT_APP_SPOTIFY_CLIENT_ID=paste your client ID here

To then get access to Spotify you will need to click on edit settings.

In the Redirsct URIs input field insert `http://localhost:3000/` and then click save at the bottom of the page.

You will then need to go to the Spotify.js file and change the redirectUri variable to `http://localhost:3000/`.

        const redirectUri = 'http://localhost:3000/';

If you deploying then redirectUri variable will need changing to the name of the deployed application and the same done as above where we added the uri to the Spotify app from the Spotify dashboard and the also remember to set the environment variables

## Routes

The following URL paths are available:

``` PATH / ```  
Homepage that displays the names of all the playlists you have created and a button thtb we take you tpo the screen to create a new playlist  

``` PATH /create-mixtape```    
Playlist creating screen that allows you to search tracks by name, artist or album. You can add tracks to the playlist from the search results.You can search multiple times whilst making the playlist. You can also remove tracks added to the playlist before saving. The playlist can only be created when a playlist name is entered.

## Deployment

 My mixTape app has been deployed using Netlify.

## Authors

Katie Cannon
