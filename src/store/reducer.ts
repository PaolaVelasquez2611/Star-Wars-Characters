import { Actions, AppState, SWactions } from "../types/store";

export const reducer = (currentAction:Actions, currentState:AppState): AppState => {
    const {action, payload} = currentAction;
    switch (action){
        case SWactions.GET:
            return {
                ...currentState,
                personajes:payload
            }
            default: 
            return currentState;
    }
}