var express = require('express')
  , app = express()

var db = require('./models/db')

app.engine('handlebars', require('express-handlebars'));
app.set('view engine', 'handlebars');

app.use('/comments', require('./controllers/comments'))
// app.use('/users', require('./controllers/users'))

// Connect to Mongo on start
db.connect('mongodb://localhost:27017/mydatabase', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
/*    app.listen(3000, function() {
      console.log('Listening on port 3000...')
    })
*/  
    
    var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
    var ip = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1";

    var server = app.listen(port, ip, function(){
      console.log('Listening in port %d', server.address().port);
    });
    
  }
})