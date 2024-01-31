import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newnoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newnoteValidator,userAuth, noteController.Registration);

//login
router.post('/:_id', userAuth,noteController.login);

//delete Note
router.delete('/:_id', userAuth,noteController.Delete);

//update
router.put('/:_id',userAuth,noteController.update);


//getall
router.get('',userAuth,noteController.getAllNotes);

export default router;
