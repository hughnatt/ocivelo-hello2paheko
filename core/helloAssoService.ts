import { HelloAssoOrderData } from './models/HelloAssoModels';
import pahekoApiClient from './pahekoApiClient';


const handleOrder = async (order: HelloAssoOrderData): Promise<void> => {
    let pahekoUser = await pahekoApiClient.getUserByEmail(order.payer.email)
    // if (pahekoUser === undefined) {
    //     pahekoUser = await pahekoApiClient.createUser();
    // }
}

export default { handleOrder }
