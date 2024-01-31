import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

import * as noteController from '../controllers/note.controller';
import { error } from '@hapi/joi/lib/base';

// registration
export const Registration = async (req, res, next) => {
  try {
    const data = await NoteService.Registration(req.body);
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
export const login = async (req, res, next) => {
  try {
    const data = await NoteService.login(req.body);
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

export const Delete = async (req, res, next) => {
  try {
    const noteId = req.params.noteId;
    const data = await NoteService.Delete(noteId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note delete successfull',
    });
  } catch (error) {
    next(error);
  }
};
