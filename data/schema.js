var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    seriesSchema = new schema({
          name: {type:String, index:1,required:true,unique:true},
          genre: String,
          season: Number,
          episode_number: Number,
          rating: Number
        }, {collection: 'serieses'});
  module.export = seriesSchema;
