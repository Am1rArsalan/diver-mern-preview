const mongoose = require('mongoose');
const Schema = mongoose.Schema ;


const transActionSchema = new Schema({
   from : {
       type : Schema.Types.ObjectId ,
       ref : "users" ,
       required : true
   } ,
  recived: {
     type :Boolean ,
      required : true
  } ,

  des : {
      type :String,
      required : true
  } ,
  amount : {
      type : Number ,
      required: true
  }
} ,  {timestamps : true }  ) ;



const TransAction =  mongoose.model('transActions' , transActionSchema )   ;

module.exports =  TransAction  ;



