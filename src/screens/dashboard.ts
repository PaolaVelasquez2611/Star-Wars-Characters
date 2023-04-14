
import {default as getApi} from "../components/data";
import "./components/export";
import starWarsCard, { Attribute } from "../components/tarjeta/tarjeta";
import { addObserver, appState, dispatch } from "../store/index";
import { getPersonajes } from "../store/actions";


class Dashboard extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }


    async connectedCallback() {
        const action = await getPersonajes();
        dispatch(action)
    }

    render() {
        appState.personajes.forEach((data:any)=>{
            const characterCard = this.ownerDocument.createElement(
                "starwars-card") as starWarsCard;
                characterCard.setAttribute(Attribute.name, data.name);
                characterCard.setAttribute(Attribute.eyecolor, data.eye_color);
                characterCard.setAttribute(Attribute.gender, data.gender);
                this.shadowRoot?.appendChild(characterCard);

        })
        
    }
}

customElements.define('dashboard-container', Dashboard)