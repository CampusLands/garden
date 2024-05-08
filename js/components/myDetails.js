export class Mydetails extends HTMLElement{
    static myCard
    details
    static query
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myDetails.css">
            <details>
                <summary>
                    <div class="details__description">Campus: </div>
                    <div class="details__container">
                        <p><marquee behavior="" direction="">Consultas sobre una tabla 6.Devuelve un listado con el nombre de los todos los clientes españoles.</marquee></p>
                    </div>
                </summary>
                <div class="report__container">
                    <my-card></my-card> 
                </div>
            </details>
        `;
        Mydetails.myCard = this.shadowRoot.querySelector("my-card")
        this.details = this.shadowRoot.querySelector("details")
    }
    sendAttributeMyCard(e){
        Mydetails.myCard.setAttribute("logic", Mydetails.query)
    }
    connectedCallback(){
        this.details.addEventListener("click", this.sendAttributeMyCard)
    }
    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        Mydetails.query = now
    }
}


