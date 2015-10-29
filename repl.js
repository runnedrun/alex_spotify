var repl = require("repl").start({}),
    promisify = require("repl-promised").promisify,
    exec = require('child_process').exec;
    SpotifyWebApi = require('spotify-web-api-node');    

var clientId = process.env.SPOTIFY_CLIENT_ID;
var secret = process.env.SPOTIFY_SECRET;

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : secret
});

var resp = {}

spotifyApi.searchTracks('track:We are your friends').then(function(data, err) {
  if (err) {
    console.error('Something went wrong', err);
    return;
  }
  resp.tracks = data.body.tracks.items

	var mostPop = data.body.tracks.items[0];

	console.log("playing: " + mostPop.name);	

	var cmd = 'chrome-cli open ' + mostPop.external_urls.spotify;

	exec(cmd, function(error, stdout, stderr) {
	  error && console.log("the command broke " + error);
	});
})
  

repl.context.api = spotifyApi;
repl.context.resp = resp;
repl.context.exec = exec;
promisify(repl);
