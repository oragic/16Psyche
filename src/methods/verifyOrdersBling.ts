import Order from '../database/models/order.model';

const verifyOrderBling = async (numero:string,)=>{
  try {
    var orders;
    var OrdersExists;
    OrdersExists = false;
    orders = await Order.findOne({numero: numero })
    .then(orders=>{
      if(orders != undefined || null){
        OrdersExists = true
      }
    })
} catch (error) {
  console.log(error)
}
return OrdersExists;
};

export default verifyOrderBling;
