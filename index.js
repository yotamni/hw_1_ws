var express = require('express');
//var json = require('/data/package.json')
var app = express();


var port = process.env.PORT || 3000;

app.listen(port);
console.log(`listening on port ${port}`);

app.get('/',function(req,res){
    res.json({"test":"new series"});
})
