const Users = require("../../model/users")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;


module.exports.createUser = async (req, res) => {
    
    try {
      
      let user = await Users.findOne({ username: req.body.username });
      if (!user) {
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        Users.create(req.body);
        return res.json(200, {
          message: "user created",
        });
      } else {
        return res.json(200, {
          message: "user already present",
        });
      }
    } catch (err) {
        console.log(err);
      return res.json(500, {
        message: "internal server error",
        error: err,
      });
    }
  };


module.exports.signIn = async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await Users.findOne({ username });
      if (!user) {
        return res.json(400, {
          message: "no account",
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.json(400, {
          message: "incorrect password",
        });
      }
  
      
  
      return res.json(200, {
        message: "sign in successfull and here's your webtoken",
        token: jwt.sign({ id: user._id }, "thisisthekey"),
      });
    } catch (err) {
      console.log(err, "error");
      return res.json(500, {
        message: "internal server err",
      });
    }
  };


  module.exports.updateUsername = async (req, res) => {
      try{
        const user = await Users.update({_id:req.user.id},{$set:{"username":`${req.body.username}`}})
      
        return res.json(200,{message:"username updated"});

      }
      catch(err){
          console.log(err);
          return res.json(500,{message:"internal server error"})
      }

  }


  module.exports.updatePassword = async(req,res)=> {
    try{
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);

        const user = await Users.update({_id:req.user.id},{$set:{"password":`${req.body.password}`}})
      
        return res.json(200,{message:"password updated"});

      }
      catch(err){
          console.log(err);
          return res.json(500,{message:"internal server error"})
      }

  }