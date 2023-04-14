
import {default as getApi} from "./components/data";
import "./components/export";
import starWarsCard, { Attribute } from "./components/tarjeta/tarjeta";


class AppContainer extends HTMLElement {
    stars: starWarsCard[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }


    connectedCallback() {
        this.render();
    }

    render() {
        const dashboardcard = this.ownerDocument.createElement("dashboard-container");
        this.shadowRoot?.appendChild(dashboardcard)
        
    }
}

customElements.define('app-container', AppContainer)