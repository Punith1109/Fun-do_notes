import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newnoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newnoteValidator, noteController.newNote);

//login
router.post('/login', noteController.getNote);


export default router;
