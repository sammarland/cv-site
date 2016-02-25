var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


app.use(bodyParser());       // to support JSON-encoded bodies

app.use(express.static('app/pages'));
app.use('/static', express.static('app/components'));
app.use('/images', express.static('app/images'));
app.use('/style', express.static('app/style'));

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
