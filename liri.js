// add code to read and set any environment variables with the dotenv package
// var dotenv = require("dotenv").config();
var axios = require("axios");
// var Spotify = require("Spotify");

// Add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// access your keys 
// var spotify = new Spotify(keys.spotify);

// Pseudo code - next steps
// Make it so liri.js can take in one of the following commands:
var userSelect = function (userSelection, entertainment) {
    switch (userSelection) {
        case "concert-this":
        concertInfo(entertainment)
    }
}
// * `concert-this`
var concertInfo = function (artist) {
    var queryurl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryurl)
        .then(function (response) {
            console.log(response.data);
        })
}

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// concertInfo("dead can dance");

var runAll = function (userSelection, entertainment) {
    userSelect(userSelection, entertainment);
}
runAll(process.argv[2], process.argv.slice(3).join(" "));

// node liri.js concert-this "dead can dance"