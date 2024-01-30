import User from '../models/user.model';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

// registration function
export const get1user =async(body) =>{
 
  body.password= await bcrypt.hash(body.password,10);
  const data=await User.create(body);
  return data;
};


//login function
export const newUser = async (body) => {
    const Data= await User.findOne({ email_id: body.email_id });

    if (Data){
      const Match = await bcrypt.compare(body.password, Data.password);
      if(Match){
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
      return token}
      else{throw new Error("invalid password");}
    }
    else{throw new Error("Invalid Email");} 
  };  



