class EventComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const btn = document.createElement("button");
    btn.innerText = "Disparar Evento";

    this.count = 0;

    btn.addEventListener("click", () => {
      this.count++;
      console.log("Clicou");
      const event = new CustomEvent("click-evt", {
        bubbles: true, //define que o evento sera propagado para fora da arvore, no acima
        composed: true, //passa o evento fora do elemento
        detail: this.count,
      });
      this.shadowRoot.dispatchEvent(event);
    });

    this.shadowRoot.addEventListener("click-evt", (event) => {
      console.log("Botão foi clicado:" + event.detail + " vezes");
    });

    this.shadowRoot.appendChild(btn);
  }
}

customElements.define("evt-comp", EventComponent);
