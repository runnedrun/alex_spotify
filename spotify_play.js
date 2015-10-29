var SpotifyWebApi = require('spotify-web-api-node');

var clientId = process.env.SPOTIFY_CLIENT_ID;
var secret = process.env.SPOTIFY_SECRET;


// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : SPOTIFY_CLIENT_ID,
  clientSecret : SPOTIFY_SECRET,
  redirectUri : 'http://www.example.com/callback'
});