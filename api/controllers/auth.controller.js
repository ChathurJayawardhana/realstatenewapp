import User from "../model/user.model.js";

export const signup = async (req,res) =>{
   const {userName,email,password} = req.body;
   const newUser = new User ({userName,email,password});
   await newUser.save();
   res.status(201).json('user created success');

};