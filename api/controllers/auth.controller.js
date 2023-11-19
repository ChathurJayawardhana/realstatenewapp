import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req,res) =>{
   const {userName,email,password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password,10);
   const newUser = new User ({userName,email,password:hashedPassword});
   try{
      await newUser.save();
      res.status(201).json('user created success');
   }catch(error){
      res.stauts(500).json(error.message);
      
   }
   

};