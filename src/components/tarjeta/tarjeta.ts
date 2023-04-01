
export enum Attribute {
    "name" = "name",
    "eyecolor" = "eyecolor",
    "gender" = "gender",
}

class starWarsCard extends HTMLElement {
name? : string;
eyecolor?: string;
gender? : string;

static get observedAttributes (){
const attributes : Record <Attribute, null> = {
    name:null,
    eyecolor: null,
    gender: null,
};
return Object.keys(attributes)
}

constructor (){
    super();
    this.attachShadow({mode:"open"});
}

connectedCallback(){
    this.render();
}

attributeChangedCallback(
propName: Attribute,
_:string | undefined,
newValue: string | undefined,

){
    switch (propName) {
        default:
        this[propName] = newValue;
        break;}

    this.render();

}

render(){
    if(this.shadowRoot) {
        this.shadowRoot.innerHTML=``

        this.shadowRoot.innerHTML+= `
        <link rel="stylesheet" href="../src/components/tarjeta/tarjeta.css">
        <section id="sec">
        <h1>Name: ${this.name}</h1>
        <h2>Eye Color: ${this.eyecolor}</h2>
        <h2>Gender: ${this.gender}</h2>
        
        </section>
        `;
    }
}


}
customElements.define("starwars-card",starWarsCard);
export default starWarsCard;