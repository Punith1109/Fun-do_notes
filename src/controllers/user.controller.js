import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';



// registration
export const newuser = async (req, res, next) => {
  try {
    const data = await UserService.registerUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User has been created created successfully'
    });
  } 
  catch (error) {
    next(error);
  }
};

// login function
export const getUseru = async (req, res, next) => {
  try {
    const data = await UserService.loginuser(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Login needs Authorization'
      });
    }
  catch (error) {
    next(error);
  }
};


export const getUser = async (req, res, next) => {
  try {
    const userId = req.params._id; 
    const data = await UserService.getUser(userId);
    
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Login successful'
    });
  } catch (error) {
    next(error);
  }
};
//Delete function

export const deleteuser=async(req,res,next)=>{
  try{
    const userId = req.params._id;
    const data=await UserService.deleteUserbyId(userId);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User deleted successfully'
    });
  }catch(error){
    next(error)
  }
};

//update

export const update = async (req, res, next) => {
  try {
    const userId = req.params._id;
    const updateData = req.body; 
    const data = await UserService.updateu(userId, updateData);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};