let NeDB = require('nedb');
let db = new NeDB({
  
  filename: 'users.db',
  autoload: true

});

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

    db.insert(req.body, (err, user)=>{

        if (err) {
          console.log(`error: ${err}`);
          res.status(400).json({
            error: err
          });
        } else {
          res.status(200).json(user); 
        }

    });
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
