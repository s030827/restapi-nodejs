const http = require('http');

let server = http.createServer((req, res)=>{
  
  console.log('Url:', req.url);
  console.log('Method:', req.method);

  res.end('OK');

});

server.listen(3000, '127.0.0.1', ()=>{

  console.log('Server runnning!')

});
