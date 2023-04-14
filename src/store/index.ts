import { Actions, AppState, observer } from "../types/store";
import { reducer } from "./reducer";

export let appState: AppState = {
    personajes:[]

}

let observers : observer[]=[];

export const dispatch = (action:Actions)=> {
    const clones = JSON.parse(JSON.stringify(appState))
    appState = reducer(action,clones);
    observers.forEach(x=>x.render());
}

export const addObserver = (ref:observer) => {observers=[...observers,ref]};