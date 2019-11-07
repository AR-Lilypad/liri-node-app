// add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// the dependancies required
let axios = require("axios");
let Spotify = require("'node-spotify-api'");
let moment = require("moment");
let fs = require("fs");

// Add the code required to import the `keys.js` file and store it in a variable
const keys = require("./keys.js");

// access your keys 
let spotify = new Spotify(keys.spotify);

console.log(process.env);

// Make it so liri.js can take in one of the following commands:

// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

//variables for arguments that users will input on the command line selection will run the specific package
// let selection = process.argv[2];
// // and userInput will search for the user's query
// let userInput = process.argv.slice(3).join(" ");

var userSelect = function (userSelection, entertainment) {
    switch (userSelection) {
        case "concert-this":
            concertInfo(entertainment);
            break;

        case "spotify-this-song":
            spotifyThisSong();
            break;                          //     if (userSelect) {
        //         spotifyThisSong(userSelect)
        //     } else {
        //         spotifyThisSong("A Love Supreme")
        //     }
        case "movie-this":
            movieInfo(entertainment);               //     if (userSelect) {
            break;                          //         omdb(userSelect);
        //                                     //     } else {
        //                                     //         omdb("Mr. Nobody");
        //                                     //     }
        case "do-what-it-says":
            doWhatItSays(value);
            break;

        default:
            console.log("Type a valid search value: a band, a movie, or spotify song or artist.")
    }
}

// concert-this 
var concertInfo = function (artist) {
    console.log(artist);
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // for (var i = 0; i < eventList.length; i++) {

            console.log("=======================================================================");
            console.log("Name: " + response.data[0].lineup + "\n");
            console.log("Venue Name: " + response.data[0].venue.name + "\n");
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country + "\n");
            console.log("Concert Date : " + moment(response.data[0].datetime).format("MM/DD/YY") + "\n");

            //array for the log.txt
            let eventList = response.data;
            fs.appendFile("log.txt", "=========================================================" + "\n" + artist + "\n" + response.data[0].venue.name + "\n" + response.data[0].venue.city + "\n" + response.data[0].venue.region + "\n" + response.data[0].venue.country + "\n" + response.data[0].datetime + "\n", function (error) {
                if (error) {
                    return console.log(error);
                }
            });
        })
};

// =====================================================================

// movie-this
var movieInfo = function (movie) {
    if (!movie) {
        movie = "Mr. Nobody";
        console.log(movie + "\n");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: <http://www.imdb.com/title/tt0485947/>" + "\n");
        console.log("It's on Netflix!");
    }
    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy")
        .then(function (response) {

            console.log("=======================================================================");
            console.log("Title: " + response.data.Title + "\n");
            console.log("Release Year: " + response.data.Year + "\n");
            console.log("IMDB Rating: " + response.data.imdbRating + "\n");
            console.log("Rotton Tomatoes Rating: " + response.data[1].tomatoesRating + "\n");     //  Ratings: [ [Object], [Object], [Object] ]
            console.log("Made In: " + response.data.Country + "\n");
            console.log("Language: " + response.data.Language + "\n");
            console.log("Plot: " + response.data.Plot + "\n");
            console.log("Actors include: " + response.data.Actors + "\n");

            //array for the log.txt
            let movieList = response.data;
            fs.appendFile("log.txt", "=========================================================" + "\n" + response.data.Title + "\n" + response.data.year + "\n" + response.data.imdbRating + "\n" + response.data[1].tomatoesRating + "\n" + response.data.Country + "\n" + response.data.Language + "\n" + response.data.Plot + "\n" + response.data.Actors + "\n", function (error) {
                if (error) {
                    return console.log(error);
                }
            });
            // }
        });
}

//==============================================================================

// spotify this song
spotify
function spotifyThisSong(song) {
    if (!song) {
        song = "The Sign";
        console.log(song + songData.artists[0].name);

        spotify.search({ type: 'track', query: song, limit: 3 })
            .then(function (response) {

                console.log(response);
                var songData = data.tracks.items[i];
                //artist
                console.log("Artist: " + songData.artists[0].name);
                //song name
                console.log("Song: " + songData.name);
                //spotify preview link
                console.log("Preview URL: " + songData.preview_url);
                //album name
                console.log("Album: " + songData.album.name);
                console.log("-----------------------");

            })
            .catch(function (err) {
                console.log(err);
            });
    }
}

//==============================================================================

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
    })
}

var runAll = function (userSelection, entertainment) {
    userSelect(userSelection, entertainment);
}
runAll(process.argv[2], process.argv.slice(3).join(""));