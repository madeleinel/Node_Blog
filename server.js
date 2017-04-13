// Access the http module
// http is a useful core module, which helps process the server requests and responses
var http = require('http');


var message = "Here's the first message";
// Create a handler function
// Handler functions receives and handles the requests made to the server
// They take two arguments: a request and a response object
// The response object is sent back to the client (along with other information)
function handler (request, response) {
  // Create a HEADER for the response; contains information about the response
  // writeHead takes two parameters: a status code (200) and a header object ({})
  response.writeHead(200, {"content-type": "text/html"});
  // Tell the function to send the content of "message" in the response, using the response.write method
  response.write(message);  // defines the BODY of the response
  response.end(); // signals the END of the response / tells the function to finish the response
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
