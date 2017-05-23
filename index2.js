var http = require('http');
var port = 8080;
var server = http.createServer();
server.listen(port, function(error) {
 if (error) {
   console.log(error);
 } else {
   console.log('api listening on port', port);
 }
});

 let state = 10 ;
server.on('request', function(request, response) {
 console.log('New http request received', request.url);

 if ( request.url === '/state') {
     response.end(state.toString());
 }
 else if  ( request.url === '/add' ) {
     state++;
    response.end(state.toString());
 }
   else if  ( request.url === '/remove' ) {
     state--;
    response.end(state.toString());
 }
   else if  ( request.url === '/reset' ) {
     state = 10;
    response.end(state.toString());
 }
    else {
     var error1 = '404';
        response.end(error1);
  }
});
