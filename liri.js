// add code to read and set any environment variables with the dotenv package
var dotenv = require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

// access your keys 
var spotify = new Spotify(keys.spotify);

// Pseudo code - next steps
// Make it so liri.js can take in one of the following commands:

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

