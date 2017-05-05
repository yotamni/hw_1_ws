var express = require('express');
//var json = require('/data/package.json')
var app = express();


var port = process.env.PORT || 3000;

app.listen(port);
console.log(`listening on port ${port}`);
/*
app.get('/playmusic/:music_id',
    (req,res) =>{
        console.log('')
         res.send(`<!doctype html><html>
                <head>
                <title>${req.params.music_id}</title>
                </head>
                <body>
                    <h1>wow</h1>
                </body>
            </html>`);
    });

app.post('/savemusic',
    (req,res) => {

        var songs = req.body.songs
        res.json({success:1});
    });

app.get('/getMusicName/:music_id',
    (req,res)=>{
        res.json(`"music-name":${req.params.music_id}`);
/*
app.get('/',function(req,res){
    res.send(`<!doctype html><html>
                <head></head>
                <body>
                    <h1>wow</h1>
                </body>
            </html>`);
});
*/
app.get('/',function(req,res){
    res.json({pageName:"home"});
});
app.post('/products',function(req,res){
    res.json({pageName:'products'});
});

app.put('/products/product1',function(req,res){
    res.json({pageName:'products/product1'});
});

app.all('*',
    (req,res,next)=>{
   // res.json({pageName:"ather url"});
    console.log('loged');
    req.next();
});

app.get('/myprof+ile',function(req,res){
    res.send(`<!doctype html><html>
                <head></head>
                <body>
                    <h1>wow</h1>
                </body>
            </html>`);

});
