var data = require('./data/data.json');

exports.getAllNewSerieses = () =>{
  let jsonObj =[];
  for(let i in data.new_serieses){
    jsonObj.push(data.new_serieses[i]);
  }

  if(data.new_serieses.length==0){
    return error();
  }
  return jsonObj;
}

exports.getSeriesByGenre = (genre) =>{
  let foundSeries = false;
  let jsonObj =[];
  for(let i in data.new_serieses){
    if(data.new_serieses[i].genre == genre){
      jsonObj.push(data.new_serieses[i]);
      foundSeries = true;
    }
  }
  if(!foundSeries)
  {
    return error("series not found");
  }

  return jsonObj;
}

exports.getSeriesByRating = (low,high) =>{
  if(high<low){
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
}

function error(msg){
  return JSON.parse(`{"err":"${msg}"}`);
}
