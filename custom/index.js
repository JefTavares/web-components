import ConfirmLink from "./confirm-link.js";
import SpoilerParagraph from "./spoiler-p.js";

//{ extends: "a" } herda o HTMLAnchorElement a tag a
customElements.define("confirm-link", ConfirmLink, { extends: "a" });
customElements.define("spoiler-p", SpoilerParagraph, { extends: "p" });
