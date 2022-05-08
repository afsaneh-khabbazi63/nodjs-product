const User = require("../models/User")

const getAllUser = async (req,res) =>{
    const users = await User.find({})
    res.send(users)
}

const getUser = (req,res) =>{
    
    res.send("diplay User")
}



function editUser(req,res){
    res.send("update ")
}

function deleteUser(req,res){
    res.send("delete User")
}

module.exports={
    getAllUser,
    getUser,
    editUser,
    deleteUser
}