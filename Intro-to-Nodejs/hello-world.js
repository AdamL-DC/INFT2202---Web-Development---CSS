const http = require('node:http');

const hostName = '127.0.0.1'; //localhost

const port = 3200; // Defining the port number we want the server to listen for HTTP requests on

const server = http.createServer((request, response) => {
    // the object represents the incoming HTTP request from the browser
    // the response object represents the outgoing HTTP response that the server will send back
    response.statusCode = 200; // HTTP Status 200
    response.setHeader('Content-Type', 'text/plain'); // We are informing the client that receives our response that it will be in the format of text/plain
    response.end('Hello World \n'); // We are sending the following data as the body of the response
});

server.listen(port, hostName, () => {
    // We are configuring our server to listen to the port 3200 (defined above) and at the hostName localhost (127.0.0.1)
    console.log('Server running at http://' + hostName + ':' + port + '/'); // The callback arrow function is a handler that will execute once the server confirms that it is listening
});