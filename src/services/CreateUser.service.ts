import User from '../database/models/user.model';
import encryptToken from  '../methods/encrypt';
import verifyUser from '../methods/verifyUserExists'

interface IVoluntaryRequest {
  user_id: string;
  pipedrive_token:string;
  bling_token:string;
}

export default class CreateUserService {
  async execute({ user_id,pipedrive_token, bling_token }: IVoluntaryRequest) {
    const userAlreadyExists = await verifyUser(user_id);
    if(userAlreadyExists === true){
     console.log("User already exists")
    }
    try {

        const pipedriveEncrypt = encryptToken(pipedrive_token);
        const blingEncrypt = encryptToken(bling_token);
        const user = await new User({
          user_id,
          brokers:{pipedrive_token:pipedriveEncrypt, bling_token:blingEncrypt}
        })
        await user.save()
   } catch (error) {

        console.log("error")

   }
  }
}
