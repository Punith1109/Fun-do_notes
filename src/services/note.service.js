import Note from '../models/note.model';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

// registration function
export const Registration =async(body) =>{
 const data=await Note.create(body);
  return data;
};


//login function
export const login = async (body) => {
    const Data= await Note.findOne({ title: body.title });
return Data;
  };  

//DeleteNote



export const Delete = async (id) => {
  await Note.findByIdAndDelete(id);
  return id;
};