import axios from 'axios';
import xmlToBling from '../xmlSchema/xmlToBLing';


const provideToBling = (deal_id:string,title: string,value:string,status: string,customer_name:string) => {
  const requestBling = xmlToBling(deal_id,title,value,status,customer_name);
  return requestBling;
};

export default provideToBling;
