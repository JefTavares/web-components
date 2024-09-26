const templateNoJS = document.createElement("template");
template.innerHTML = `
       <style>
          h1 {
            color: blue;
          }
          /* Psiudo classes*/
          :host {
            color: green;
          }
          /* Seleciona a raiz do shadomDom cujo o filtro css corresponda*/
          :host(.dois) h1 {
            text-transform: uppercase;
          }
          /* Olha para o elememnto pai, cujo o elemento pai seja uma div. Por isso o cponent 3 tem esse texto grande */
          :host-context(div) p {
            font-size: 2rem;
          }
          ::slotted(ul) {
            color: gold;
          }
        </style>
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>

        <p>Meu Paragráfo do template</p>
`;

class MyComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const template = document.querySelector("#template").content.cloneNode(true);
    const templateInterno = this.querySelector("template").content.cloneNode(true);

    console.log(template);

    //Pronto aqui vc consegue visualizar o p em preto, ele não é afetado pelo estilo definido no light dom
    // this.shadowRoot.innerHTML = `
    //     <style>
    //       h1 {
    //         color: blue;
    //       }
    //       /* Psiudo classes*/
    //       :host {
    //         color: green;
    //       }
    //       /* Seleciona a raiz do shadomDom cujo o filtro css corresponda*/
    //       :host(.dois) h1 {
    //         text-transform: uppercase;
    //       }
    //       /* Olha para o elememnto pai, cujo o elemento pai seja uma div. Por isso o cponent 3 tem esse texto grande */
    //       :host-context(div) p {
    //         font-size: 2rem;
    //       }
    //       ::slotted(ul){
    //         color: gold;
    //       }
    //     </style>
    //     <h1>${this.getAttribute("titulo")}</h1>
    //     <slot name="lista"></slot>
    //     <slot name="par"></slot>
    // `;

    this.shadowRoot.appendChild(template);
    this.shadowRoot.appendChild(templateInterno);
    this.shadowRoot.appendChild(templateNoJS.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newVal) {
    console.log("2 - ", name, oldValue, newVal);
  }

  //passa um metodo static para o attributeChangedCallback
  static get observedAttributes() {
    return ["conteudo", "titulo"];
  }

  //chamado apos o elemento ser carregado no DOM
  connectedCallback() {
    console.log("3 - Chamou o connectedCallback");
  }

  //chamado apos o elementeo ser desconectado do DOM. Utilizado geralmente para fazer algum tipo de limpeza, remover listeners, não deixar sujeira na página
  disconnectedCallback() {
    //ativado quando clico no botão desconectar
    console.log("4 - chamou disconnectedCallback");
  }
}

//O nome do component deve ser separado por - e um - é obrigatório
customElements.define("my-component", MyComponent);
