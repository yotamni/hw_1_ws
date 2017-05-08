var express = require('express');
var bodyParser = require('body-parser');
var series = require('./mdl');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var port = process.env.PORT || 3000;

app.get('/getAllNewSerieses',(req,res) =>{
  res.status(200).json({'serieses':series.getAllNewSerieses()});
});

app.post('/getSeriesByGenre',(req,res)=>{
  res.status(200).json(series.getSeriesByGenre(req.body.genre))
});

app.get('/getSeriesByRating/:low/:high',(req,res) =>{
  res.status(200).json({'serieses':series.getSeriesByRating(req.params.low,req.params.high)});
});

app.get('/',(req,res)=>{
  res.status(200).sendfile('./data/api.html', {root: __dirname })
});

app.all('*',(req,res)=>{
  res.status(404).json({"err":"page not found"});
});

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});
