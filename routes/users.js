module.exports = (app)=>{
  app.get('/users', (req, res)=>{

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

  app.post('/users', (req, res)=>{
    res.json(req.body);
  });

  app.get('/users/admin', (req, res)=>{

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

};
