import Note from '../models/note.model';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';

// registration function
export const newnote =async(body) =>{
 const data=await Note.create(body);
  return data;
};


//login function
export const getnote = async (body) => {
    const Data= await Note.findOne({ _id:body.id });
return Data;
  };  

//DeleteNote



export const delnote = async (id) => {
  await Note.findByIdAndDelete(id);
  return id;
};

export const updatenote= async (id, updateData) => {
  const data = await Note.findByIdAndUpdate(id, updateData, { new: true });
  return data;
};


//get all
export const getAllNotes = async () => {
  const data = await Note.find();
  return data;
};