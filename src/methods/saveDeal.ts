
import Deal from '../database/models/deal.model';

const saveDeal = async ( deal_id:number,title:string,value:string,status:string ) => {
  try {
    const deal = await new Deal({
      deal_id:deal_id,
      title:title,
      value:value,
      status:status
    })
    await deal.save()
} catch (error) {
  console.log(error)
}
};

export default saveDeal;
