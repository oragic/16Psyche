
import { model, Schema, Model, Document } from "mongoose";

interface IUser extends Document {
  user_id: Number;
  broker: any;
}

const UserSchema:Schema = new Schema({
  user_id: {
    type:Number,
    required: true,
  },
  brokers:{
      pipedrive_token:{
        type:String
      },
      bling_token:{
        type:String
      }
  }
}, {
  timestamps: true
});

const User: Model <Document> = model('User', UserSchema);

export default User;
