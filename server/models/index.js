const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const UserSchema = new Schema({
    name: {
       type : String  ,
       required:[true , "Name is required"],
       validate : {
          validator : (value) => value.length > 2  ,
          message  : "Longer Than 2 Please"
        }
    },

    username: {
       type : String  ,
       required:[true , "Name is required"],
       validate : {
          validator : (value) => value.length > 2  ,
          message  : "Longer Than 2 Please"
        }
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
});


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
  }
}) ;



const TransAction =  mongoose.model('transActions' , transActionSchema )   ;
const User =  mongoose.model('users' , transActionSchema )   ;

module.exports = { TransAction , User } ;



