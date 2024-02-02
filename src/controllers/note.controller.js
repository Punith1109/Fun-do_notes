import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

import * as noteController from '../controllers/note.controller';
import { error } from '@hapi/joi/lib/base';

// registration
export const newnote = async (req, res, next) => {
  try {
    const data = await NoteService.newnote(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'New note has been created created successfully'
    });
  } 
  catch (error) {
    next(error);
  }
};

// login function
export const getnote = async (req, res, next) => {
  try {
    const noteId=req.params.id
    const data = await NoteService.getnote({id:noteId});
    if(data){

      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Login Succesffully'
      });}
      else{throw new Error("Invalid login Id")}
    }
  catch (error) {
    next(error);
  }
};

//Delete

export const delnote = async (req, res, next) => {
  try {
    const noteId = req.params._id;
    const data = await NoteService.delnote(noteId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note delete successfull',
    });
  } catch (error) {
    next(error);
  }
};


export const updatenote = async (req, res, next) => {
  try {
    const noteId = req.params._id;
    const updateData = req.body; 
    const data = await NoteService.updatenote(noteId, updateData);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note updated successfully'
    });
  } catch (error) {
    next(error);
  }
};


//getall
export const getAllNotes = async (req, res, next) => {
  try {
    const data = await UserService.getAllNotes();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All Notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};