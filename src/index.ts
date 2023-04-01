
import { getApi } from "./components/data";
import "./components/export";
import starWarsCard, { Attribute } from "./components/tarjeta/tarjeta";


class AppContainer extends HTMLElement {
    stars: starWarsCard[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }


    async connectedCallback() {
        const data = await getApi();
      

        data?.forEach((character: any) => {
            const characterCard = this.ownerDocument.createElement(
                "starwars-card") as starWarsCard;
                characterCard.setAttribute(Attribute.name, character.name);
                characterCard.setAttribute(Attribute.eyecolor, character.eye_color);
                characterCard.setAttribute(Attribute.gender, character.gender);
                this.stars.push(characterCard);

        });

        this.render(this.stars);
    }

    render(stars: any) {
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.stars.forEach((stars)=>{
                this.shadowRoot?.appendChild(stars);
            });
        }
        
    }
}

customElements.define('app-container', AppContainer)