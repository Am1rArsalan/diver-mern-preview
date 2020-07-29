const user = require("../../models/user");


function getData(req, res){
  user
    .findById(req.user._id)
    .populate({
      path: "transActions",
        populate:{
            path : "from" , // { name : "" , image }
            ref : "users" ,
            select:'name image'
        }
    })
    .then((foundedUser) => {
      return res.json({
        data: {
          name: foundedUser.name,
          username: foundedUser.username,
          phone: foundedUser.phone,
          about : foundedUser.about ,
          email : foundedUser.email ,
          image : foundedUser.image  ,
          transActions: foundedUser.transActions,
            amount : foundedUser.amount
        },
        status: true,
      });
    })
    .catch((err) => {
      console.log("error In  Finding user ( User Controller )", err);
    });
}

module.exports = { getData }


