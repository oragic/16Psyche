
import Order from '../database/models/order.model';

const saveOrder = async ( number:string,fullPrice:string ) => {
  try {
    const order = await new Order({
      number:number,
      fullPrice:fullPrice
    })
    await order.save()
} catch (error) {
  console.log(error)
}
};

export default saveOrder;
