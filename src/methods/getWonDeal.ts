import axios from 'axios';
const getWonDeal = async (baseUrl:string,token:string):Promise<any> => {
  const wonDeal:any = await axios.get(`https://${baseUrl}/api/v1/deals?api_token=${token}`,{ params: {status :"won"}})
  var wonDealHandled = []
  wonDealHandled = wonDeal.data;
  return wonDealHandled;
}

export default getWonDeal;
