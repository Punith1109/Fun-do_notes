import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newnoteValidator } from '../validators/note.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newnoteValidator, noteController.Registration);

//login
router.post('/:_id', noteController.login);

//delete Note
router.delete('/:_id', noteController.Delete);

export default router;
