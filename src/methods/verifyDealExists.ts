import Deal from '../database/models/deal.model';

const verifyDeal = async (id:number,date:string)=>{
  try {
    var deal;
    var dealExists
    dealExists = false;
    deal = await Deal.findOne({deal_id: id })
    .then(deal=>{
      if(deal != undefined || null){
        dealExists = true
      }
    })
} catch (error) {
  console.log(error)
}
return dealExists;
};

export default verifyDeal;
