// Access the http module
// http is a useful core module, which helps process the server requests and responses
var http = require('http');
// Access the fs module
// fs is another core module, which allows reading and writing to and from the hard drive
// This module is required to be able to send any files from the server
var fs = require('fs');


// Create a handler function
// Handler functions receives and handles the requests made to the server
// They take two arguments: a request and a response object
// The response object is sent back to the client from the server (along with other information)
function handler (request, response) {


  if (request.url === "/") {
    // Create a HEADER for the response; contains information about the response
    // writeHead takes two parameters: a status code (200) and a header object ({})
    response.writeHead(200, {"content-type": "text/html"});

    // Tell the function to send the content of "message" in the response, using the response.write method
    // response.write(message);  // defines the BODY of the response

    // Tell the function to send the file index.html in the response, using an "fs" method
    // use fs.readFile; before the server can send the file, it needs to read it first
    // it takes two parameters: the path to the file, and a callback function
    fs.readFile(__dirname + '/public/index.html', function(error, file) {  // "__dirname" is a node global object that gives us a path to the current working directory (so don't need to write out the whole path)
      if (error) {
        console.log(error);
        return;
      }
      response.end(file); // signals the END of the response / tells the function to finish the response
    });
  }
}


// Build/initialise the server
// Pass the handler function to the createServer method
var server = http.createServer(handler);
// Start listening to potential requests;
// Set up a port for the server to listen to
// server.listen takes to arguments: a port (3000) and a callback function
// Type "node server.js" within the command line to turn the server on
server.listen(3000, function() {
  console.log("server is listening on port 3000");
})




// ///////////// ///////////// ///////////// /////////////

// // To send a message as a response (display a message on the site):
// // Option A:
// var message = "Here's the first message";
// // within the handler function:
// response.write(message);
// // Option B:
// // within the handler function:
// response.write("this is the second page");

// To send an HTML page as a response:
// Require "fs" and use "fs" methods
// >> See how it's been done within this file

// ///////////// ///////////// ///////////// /////////////

// Methods for within the handler function:
// // To find out the endpoint of the current URL
// // This can be used to set up different responses depending on the URL path
// // eg through: if (request.url === "/")
// var endpoint = request.url;
// // To find out which of the HTTP methods was used for the request (either GET, POST, PUT or DELETE)
// var method = request.method;
