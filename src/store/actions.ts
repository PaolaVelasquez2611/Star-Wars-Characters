import getApi from "../components/data"
import { getSWactions, SWactions } from "../types/store"

export const getPersonajes = async():Promise<getSWactions> =>{
    const SW:any = await getApi();
    return{
        action: SWactions.GET,
        payload: SW
    }
}