const User =require("../models/User")

const signup= async (req,res)=>{
    const {name, email, password}=req.body
    if (name!="") {
        
    }
    const user = User({
        name,
        email,
        password:password
    })

    await user.save();
    
    res.status(201).send(user)
}

const login= async(req,res)=>{
    const { email, password}=req.body
    const user = await User.findOne({
        email,
        password
    })

    if(!user){
        res.status(400).send({message: "email or password is not correct"})
    }else{
        res.status(201).send({message: "login user"})
    }
}

module.exports={
    signup,
    login
 
}