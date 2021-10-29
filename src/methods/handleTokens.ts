import decryptToken from './decrypt'
import {Document} from 'mongoose'
import User from '../database/models/user.model'


const handleTokens = async (user_id:Number)=>{
interface USER extends Document {
  brokers:any;
}
  try {

    const user =  await User.findOne({user_id: user_id}) as USER || "mock";
    console.log(user)

    var tokensToBroker
    tokensToBroker = {
      pipeDriveToken:decryptToken(user.brokers.pipedrive_token),
      bling_token:decryptToken(user.brokers.bling_token),
    }
  } catch (error) {
    console.log(error);
  }
  return tokensToBroker;

}

export default handleTokens;
