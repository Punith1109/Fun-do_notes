import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newnoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', userAuth,newnoteValidator, noteController.newnote);

//login
// router.post('/:_id', userAuth,noteController.getnote);
router.post('/:id',noteController.getnote);


//delete Note
router.delete('/delete/:_id', userAuth,noteController.delnote);

//update
router.put('/update/:_id',userAuth,noteController.updatenote);


//getall
router.get('',userAuth,noteController.getAllNotes);

export default router;
