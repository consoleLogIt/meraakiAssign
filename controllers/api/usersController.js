const Users = require("../../model/users")



module.exports.getAllUsers = async (req, res) => {

try{

    const users = await Users.find({},"-password");
    return res.json(200,{
        message:"all users",
        users
    })
}
catch(err)
{
    console.log(err);
    return res.json(500,{message:"internal server error"});
}

}

module.exports.getUser = async(req,res) => {

    try{

        const user = await Users.findById(req.params.id,"-password")
        return res.json(200,{
            message:"used",
            user
        })
    }
    catch(err)
    {
        console.log(err);
        return res.json(500,{message:"internal server error"});
    }

}