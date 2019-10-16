// add code to read and set any environment variables with the dotenv package
// require("dotenv").config();

// the requireds
let axios = require("axios");
// let Spotify = require("'node-spotify-api'");
let moment = require("moment");
// let fs = require("fs");

// Add the code required to import the `keys.js` file and store it in a variable
// clear
// const keys = require("./keys.js");

// access your keys 
// let spotify = new Spotify(keys.spotify);
// let omdbKey = keys.omdb.api_key;


// console.log(process.env);

// Make it so liri.js can take in one of the following commands:


// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

let selection = process.argv[2];
let userInput = process.argv[3];

switch (selection) {
    case "concert-this":
        concertThis();
        break;
    // case "spotify-this-song":
    //     spotifyThisSong(value);
    //     break;                          //     if (userSelect) {
    //         spotifyThisSong(userSelect)
    //     } else {
    //         spotifyThisSong("A Love Supreme")
    //     }
    // case "movie-this":
    //     movieThis(value);               //     if (userSelect) {
    //     break;                          //         omdb(userSelect);
    //                                     //     } else {
    //                                     //         omdb("Mr. Nobody");
    //                                     //     }
    // case "do-what-it-says":
    //     doWhatItSays(value);
    //     break;


    default:
        console.log("Type a value to search such as a band, a movie, or spotify something.")
};


// concert-this 
var concertThis = function (selection, userInput) {
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
        .then(function (response) {
            let eventList = response.data;
            eventList.forEach(function (response) {
                let dateFormat = moment(response.datetime).format("MM/DD/YYYY");
            })
            console.log(`${response.venue.name},
            ${response.city}, ${response.region},${response.datetime}
=====================================================================`);

            err => {
                if (err) console.log("error.response");
            }
        })
}
 


// spotify
// function spotifyThisSong(song) {
//     spotify.search({ type: 'track', query: "Love Supreme" })
//       .then(function (response) {
//     console.log(response);
// })
//     .catch(function (err) {
//         console.log(err);
//     });
// }

// omdb key = 
// const BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_KEY}`
// VUE_APP_OMDB_KEY =

// axios.get("http://www.omdbapi.com/?t=joker&y=2019&apiKey=${process.env.VUE_APP_OMDB_KEY}&y=&plot=short&tomatoes=true").then(
//     function (response) {
//         console.log("Title: " + response.Title);
//         console.log("Release Year: " + response.Year);
//         console.log("IMDB Rating: " + response.imdbRating);
//         console.log("Rotton Tpmatoes Rating: " + response.Ratings);
//         console.log("Made In: " + response.Country);
//         console.log("Language: " + response.Language);
//         console.log("Plot: " + response.Plot);
//         console.log("Actors include: " + response.Actors);
//     })











// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
// function doWhatItSays() {
//     fs.readFile("random.txt", "utf8", function (err, data) {
//         if (err) {
//             return console.log(err);
//         }

//         // Break the string down by comma separation and store the contents into the output array.
//         var output = data.split(",");

//         // Loop Through the newly created output array
//         for (var i = 0; i < output.length; i++) {

//             // Print each element (item) of the array/
//             console.log(output[i]);
//         }
//     });
// }
