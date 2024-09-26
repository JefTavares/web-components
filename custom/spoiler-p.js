class SpoilerParagraph extends HTMLParagraphElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    //slot o conteudo vem para o slot
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline;
        }
        :host(.spoiler) {
          background-colo: gray;
          color: transparent;
          cursor: pointer;
        }
      </style>
      <slot></slot>
    `;

    console.log("chamou");
  }

  connectedCallback() {
    this.classList.add("spoiler");

    this.addEventListener("click", () => {
      if (this.classList.contains("spoiler")) {
        this.classList.remove("spoiler");
        setTimeout(() => {
          this.classList.add("spoiler");
        }, 1500);
      } else {
        this.classList.add("spoiler");
      }
    });
  }
}

export default SpoilerParagraph;
