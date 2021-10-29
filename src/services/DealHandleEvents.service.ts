import getWonDeal from '../methods/getWonDeal';
import verifyDeal from '../methods/verifyDealExists';
import saveDeal from '../methods/saveDeal';
import provideToBling from '../methods/provideDealToBling';
import axios from 'axios';
import config from '../config/BlingApiConfig';
import handleTokens from '../methods/handleTokens';
import verifyOrderBling from '../methods/verifyOrdersBling';
import saveOrder from '../methods/ordersave';

interface IUserRequest {
  meta:any,

}

interface ORDERS {
  numero:string;
  data:any
}

export default class DealHandleEvents {
  async execute({ meta }: IUserRequest) {
      if(meta.object === 'deal'){
       const handledTokens = await handleTokens(meta.user_id)

        if(handledTokens != undefined){
        var
        allDeal = await getWonDeal(meta.host,handledTokens.pipeDriveToken);
        }

        const emitDeal = []

        emitDeal.push(allDeal)
        emitDeal[0].data.forEach( async function(element:any){

          const dealVerified = await verifyDeal(element.id,element.add_time);

          if(dealVerified === false){

            const handledTokens = await handleTokens(meta.user_id)
            console.log(handledTokens);
            const dealToSave = saveDeal(element.id,element.title,element.value,element.status);
            const sendingToBling = provideToBling(element.id,element.title,element.value,element.status,element.creator_user_id.name);
            const xml = sendingToBling;

            if(handledTokens != undefined){
              const dealToBling = await axios.post(`https://bling.com.br/Api/v2/pedido/json/&apikey=${handledTokens.bling_token}`,xml,config);
              const getAllOrders = (await axios.get(`https://bling.com.br/Api/v2/pedidos/json/&apikey=${handledTokens.bling_token}`)).data;
              console.log(getAllOrders)
              getAllOrders.retorno.pedidos.forEach(async (element:any) => {

                const Orderverified = await verifyOrderBling(element.pedido.numero);
                if(Orderverified === false){
                  const order = await saveOrder(element.pedido.numero,element.pedido.totalvenda);
                  console.log(order)
                }
              })
            }

           }

        });
      }
  }
}
