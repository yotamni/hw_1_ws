var express = require('express');
var bodyParser = require('body-parser');
var series = require('./mdl');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;

app.get('/getAllNewSerieses',(req,res) =>{
  res.json(series.getAllNewSerieses());
});

app.post('/getSeriesByGenre',(req,res)=>{
  res.json(series.getSeriesByGenre(req.body.genre))
});

app.get('/getSeriesByRating/:low/:high',(req,res) =>{
  res.json(series.getSeriesByRating(req.params.low,req.params.high));
});

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});
