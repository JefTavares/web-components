export default class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();

    this.addEventListener("click", (event) => {
      if (!confirm("Tem certeza que deseja seguir o link?")) {
        event.preventDefault();
        console.log("Você desistiu de visitar o link");
      }
    });
  }
}
