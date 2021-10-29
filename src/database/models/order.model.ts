
import { model, Schema, Model, Document } from "mongoose";

const orderSchema:Schema = new Schema({
  number: {
    type:String,
    required: true
  },
  fullPrice:{
    type:String
  }

}, {
  timestamps: true
});

const Order: Model <Document> = model('order', orderSchema);

export default Order;
