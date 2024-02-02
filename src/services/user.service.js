import User from '../models/user.model';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

// registration function
export const registerUser =async(body) =>{
 
  body.password= await bcrypt.hash(body.password,10);
  const data=await User.create(body);
  return data;
};


//login function
export const loginuser = async (body) => {
    const Data= await User.findOne({ email_id: body.email_id });

    if (Data){
      const Match = await bcrypt.compare(body.password, Data.password);
      if(Match){
        const token = jwt.sign({ Data: { id: Data._id } }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return {Data,
      token};
    }
      else{throw new Error("invalid password");}
    }
    else{throw new Error("Invalid Email");} 
  };  


  
  export const getUser = async (id) => {
    const data = await User.findById(id);
    return data;
  };
  //Delete Function

  export const deleteUserbyId=async(id)=>{
    const data=await User.findByIdAndDelete(id);
    return data;
  }


//Update function

export const updateu= async (id, updateData) => {
  const data = await User.findByIdAndUpdate(id, updateData, { new: true });
  return data;
};