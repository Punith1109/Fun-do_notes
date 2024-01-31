import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// registering
router.post('', newUserValidator, userController.register);

//login
router.post('/:_id', userController.login);

//Delete
router.delete('/:_id', userAuth, userController.deleteuser);

//Update

router.put('/:_id',userAuth,userController.update);

//Autherization
router.get('/:_id',userAuth,userController.getUser)
export default router;


