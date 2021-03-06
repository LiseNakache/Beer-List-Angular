var express = require('express');
var bodyParser = require('body-parser')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/beers')

var app = express();

var Beer = require('./beerModel');

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/beers', function (req, res, next) {
  Beer.create(req.body, function(err, beer) {
    if (err) {
      return next(err);
    } else {
      return res.send(beer);
      res.send('POST!');
    }
  });
});


app.get('/beers',function(req, res, next){
  Beer.find({},function(err,newBeer){
    if(err){ return next(error);}
    console.log(newBeer)
    res.send(newBeer)
  })
})


app.delete('/beers/:id',function(req, res, next){
  Beer.findByIdAndRemove(req.params.id,function(err,newBeer){
    if(err){ return next(error);}
    console.log(newBeer)
    res.send(newBeer)
  })
})

app.post('/beers/:id/comment',function(req, res, next){
  Beer.findById(req.params.id,function(err,newBeer){
    if(err){ return next(err);}
    newBeer.comment.push(req.body)
    newBeer.save(function (err,commentAdded) {
      if(err){ return next(err);}
      console.log("comment added")
      console.log(newBeer)
      res.send(newBeer)
    });
  })
})






app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});




app.listen(8000, function() {
  console.log("yo yo yo, on 8000!!")
});
