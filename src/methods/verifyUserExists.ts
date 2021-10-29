import User from '../database/models/user.model';

const verifyUser = async (user_id:string)=>{
  try {
    var user;
    var userExists
    userExists = false;
    user = await User.findOne({ user_id: user_id })
    .then(user=>{
      if(user != undefined || null){
        userExists = true
      }
    })
    console.log(user)

} catch (error) {
  console.log(error)
}
return userExists;
};

export default verifyUser;
