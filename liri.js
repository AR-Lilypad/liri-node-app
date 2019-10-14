// add code to read and set any environment variables with the dotenv package
const dotenv = require("dotenv").config();
var axios = require("axios");
var Spotify = require("'node-spotify-api'");
var fs = require("fs");

// Add the code required to import the `keys.js` file and store it in a variable
const keys = require("./keys.js");

// access your keys 
var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.api_key;

// Make it so liri.js can take in one of the following commands:


// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

const userSelect = process.argv[2];
const userSelect2 = process.argv[3];

switch (userSelect) {
    case "concert-this":
        concertInfo(userSelect);
        break;
    case "spotify-this-song":
        if (userSelect2) {
            spotifyThisSong(userSelect2)
        } else {
            spotifyThisSong("A Love Supreme")
        }
        break;
    case "movie-this":
        if (userSelect2) {
            omdb(userSelect2);
        } else {
            omdb("Mr. Nobody");
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log()
};

// concert-this ("dead can dance");
var concertInfo = function (artist) {
    var queryurl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryurl)
        .then(function (response) {
            console.log(response.venue.name);
            console.log(response.city);
            console.log(response.region);
            console.log(response.datetime);
        },
            function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            }
        );
}

// spotify
function spotifyThisSong(song){
    spotify.search({ type: 'track', query: song, limit: 1},)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
}

// omdb key = 

axios.get("http://www.omdbapi.com/?t=joker&y=2019&apiKey=" + omdbKey +"&y=&plot=short&tomatoes=true").then(
      function(response) {
      console.log("Title: " + response.Title);
      console.log("Release Year: " + response.Year);
      console.log("IMDB Rating: " + response.imdbRating);
      console.log("Rotton Tpmatoes Rating: " + response.Ratings);
      console.log("Made In: " + response.Country);
      console.log("Language: " + response.Language);
      console.log("Plot: " + response.Plot);
      console.log("Actors include: " + response.Actors);
    })
    
    
    
    
    )






// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
function doWhatItSays(){
fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
  
    // Break the string down by comma separation and store the contents into the output array.
    var output = data.split(",");
  
    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {
  
      // Print each element (item) of the array/
      console.log(output[i]);
    }
  });
}




// node liri.js concert-this "dead can dance"