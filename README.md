## liri-node app
**LIRI** is a ***L***anguage ***I***nterpretation and ***R***ecognition ***I***nterface. 
As a command line interface, LIRI is a node application that will take a user's input or parameters and return data.  Through API (Application Programming Interface) liri can retrieve movie, song, concert information or follow instructions from a text file.   

**Node.js** takes the javascript engine inside of chrome and enables one to write asychronus processes.  It was built as a server-side engine (a javaScript runtime) in order to have executable sets of libraries that can interpret and execute code.

##### Why do we need it? 
Any program that runs on your computer needs a runtime to execute programs.  Examples include apps, phones, zoom.  It is a runtime that allows you to write code to run. In other words, you can write programs that don't run on a browser, but you can run it on your computer.  > It a two-way connection where both client and server can initiate communication allowing them to exchange data freely.  A good example for the use of Node.js is ***CHAT***.

Node.js has a built in support tool called ***NPM***. NPM modules are free packages for download and use.  They contain all of the files you need for a module, modules being JavaScript libraries that you can use in your project...  

## LIRI-BOT
Liri-Bot is a command line node.js application that will take in data request parameters, make API calls,and return the information back to the user. 

The technologies used in the application are:
- Node.js
- NPM Packages: Node Package Manager  (AKA Nuclear Powered Macros :smirk:) These packages are known as "dependencies" and for this application include:
  - `axios` - for api calls
  - `dotenv` - a "hidden" package to keep your passwords or api keys hidden from other users
  - `moment` - to parse, validate, manipulate, and display dates
  - `node-spotify-api` - to retrieve movie and concert information

  The application commands are:
  - `concert-this` - that will pull from the BandsInTown API using an axios get command
  - `movie-this` - that will provide movie information also using an axios api call to IMDB. _ _ If no movie provided, liri will return the Movie: "Mr. Nobody"
  - `spotify-this-song` - will look up artist information from spotify. If no song is provided, liri will return the song: 
  - `do-what-it-says` - will return the copy in a file called random.txt and that will be a spotify-this-song command

  ## How to run the app

  You can run this app by forking this repository and downloading it to your computer.

  You will need to create your own .env file to contain your own api credentials. For example for Spotify, your .env would contain the following:


     ### Spotify API keys

     SPOTIFY_ID=your-spotify-id

     SPOTIFY_SECRET=your-spotify-secret 

When this is complete, and while in your application folder, open your command line terminal and type `npm install` to install the npm packages that are dependent.  You are now ready to run the application.

 ## Running the commands:

### concert-this
While in the command line type:
** `node liri.js concert-this cher` **






