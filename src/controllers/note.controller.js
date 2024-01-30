import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';



// registration
export const newNote = async (req, res, next) => {
  try {
    const data = await NoteService.getNote(req.body);
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
export const getNote = async (req, res, next) => {
  try {
    const data = await NoteService.newNote(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Login Succesffully'
      });
    }
  catch (error) {
    next(error);
  }
};
