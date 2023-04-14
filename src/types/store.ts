import { starwarsCharacters } from "./starWarsCharacters";
export type observer = ({render:()=> void} & HTMLElement)

export type AppState = {
    personajes: starwarsCharacters[]
}

export enum SWactions {
    "GET"="GET",
}

export interface getSWactions {
    action: SWactions.GET,
    payload: [starwarsCharacters]
}

export type Actions = getSWactions;