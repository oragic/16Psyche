
import { model, Schema, Model, Document } from "mongoose";

const dealSchema:Schema = new Schema({
  deal_id:{
    type:Number
  },
  title:{
    type:String
  },
  value:{
    type:String
  },
  status:{
    type:String
  }

}, {
  timestamps: true
});

const Deal: Model <Document> = model('deal', dealSchema);

export default Deal;
