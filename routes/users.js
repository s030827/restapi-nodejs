let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=>{

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({
    users:[{
      name:'Marcus',
      email: 'marcus@gmail.com',
      id: 1
    }]
  });
});

routes.get('/admin', (req, res)=>{

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({
    users:[{
      name:'Admin',
      email: 'admin@gmail.com',
      id: 2
    }]
  });
});


module.exports = routes;
