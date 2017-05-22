
var http = require('http');
var server = http.createServer();
if (server) {
  console.log('Have creaet a server object');
}
else {
  console.log('Did not create server object');
}
const port = 8080 ;
server.listen(port, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('api listening on port', port);
    console.log(`go to http://localhost:${port}`);
  }
});


server.on('request', function(request, response) {
  var state = 10;
  switch (request.method) {
    case 'GET':
      switch (request.url) {
        case '/state':
          response.end(state.toString())
          break;
          case '/add':
          state++
            response.end(state.toString())
            break;
            case '/remove':
            state--;
                response.end(state.toString())
              break;
              case '/reset':
              state;
                response.end(state.toString())
                break;
        default:
          response.end('code 404: Not found')
          break;
      }
      break;
  case 'POST':
    response.end('POST is ok')
    break;
  default:
  response.end('Not implemented')
  break;
  }
  console.log('New http request received', request.url);
  response.setHeader('content-type', 'text/html');
  response.write(`
    <html>
    <head>
    </head>
    <body>
    <h1>Hello world</h1>
    </body>
    </html>`);
  response.end();
});
