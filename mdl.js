const data = require('./data/data.json'),
    consts = require('./data/consts'),
    Promise = require('promise');
    mongoose = require('mongoose');
    mongoose.Promise = global.Promise;

    mongoose.connect(consts.MLAB_KEY);
    const conn = mongoose.connection;

    var seriesSchema = require('./data/schema'),
        Series = conn.model('Serieses',seriesSchema);

    conn.on('error',
        (err)=>{
          console.log(`connection error ${err}`);
        });

exports.getAllNewSerieses = () =>{
  return new Promise((resolve,reject)=>{
    Series.find({},(err,result)=>{
      if(err){
        reject(err);
      }
      else{
        if(result.length==0){
          resolve(error("series not found"));
        }
        resolve(result);
      }
    });
  });
}

exports.getSeriesByGenre = (genre) =>{
  return new Promise((resolve,reject)=>{
    Series.find({genre:genre},(err,result)=>{
      if(err){
        reject(err);
      }
      else{
        if(result.length==0){
          resolve(error("series not found"));
        }
        resolve(result);
      }
    });
  });
}

exports.getSeriesByRating = (low,high) =>{
  return new Promise((resolve,reject)=>{
    Series.find({rating:{$gt:parseInt(low)-1,$lt:parseInt(high)+1}},(err,result)=>{
      if(err){
        reject(err);
      }
      else{
        if(result.length==0){
          resolve(error("series not found"));
        }
        resolve(result);
      }
    });
  });


/*  if(high<low){
    return error('parameters not in order');
  }

  let foundSeries = false;
  let jsonObj =[];
  for(let i in data.new_serieses){
    if((data.new_serieses[i].rating <= high) && (data.new_serieses[i].rating) >= low){
      jsonObj.push(data.new_serieses[i]);
      foundSeries = true;
    }
  }
  if(!foundSeries)
  {
    return error("series not found");
  }
  return jsonObj;
  */
}

function error(msg){
  return JSON.parse(`{"err":"${msg}"}`);
}
