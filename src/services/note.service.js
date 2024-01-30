import Note from '../models/note.model';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

// registration function
export const getNote =async(body) =>{
 const data=await Note.create(body);
  return data;
};


//login function
export const newNote = async (body) => {
    const Data= await Note.findOne({ title: body.title });
return Data;
  };  



