import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newUserValidator, userController.newuser);

//login
router.post('/:_id', userController.getUseru);

//Delete
router.delete('/:_id', userController.deleteuser);

//Update

router.put('/update/:_id',userController.update);

//Autherization
router.get('/:_id',userAuth,userController.getUser)
export default router;


