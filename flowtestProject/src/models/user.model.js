import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstname: {
      type: String
    },
  lastname:{
    type: String
  },
  email:{
    type:String
  },
  pwd:{
  type:String
  }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
