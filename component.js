class MyComponent extends HTMLElement {
  constructor() {
    super();

    console.log("1- Chamou o construtor");

    // Pega um atributo das tag
    if (this.hasAttribute("conteudo")) {
      const conteudo = this.getAttribute("conteudo"); //a variavel fica dinamica ali no ${conteudo}
      //console.log(conteudo);

      this.innerHTML = `
        <h1>My component</h1>
        <p>${conteudo}</p>
    `;
    }

    // Create a elemente
    // const h1 = document.createElement("h1");
    // h1.innerHTML = "My component";

    // this.appendChild(h1);

    //console.log(this.innerHTML);
    //console.log(this);

    //utilizando o dom pase
    // const html = `<h1>My component</h1>`;
    // const conteudoHTML = new DOMParser().parseFromString(html, "text/html");
    // console.log(conteudoHTML); //é um documento html completo rss
    // this.innerHTML = conteudoHTML.body.innerHTML;
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
