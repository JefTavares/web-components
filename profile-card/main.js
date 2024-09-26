import ProfileCard from "./profile.js";
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      name: "Jeferson Tavares",
      email: "jeferson@gmail.com",
      phone: "11 9765-34334",
      photo: "avatar.webp",
    };
  },
});

//informa para o Vue qual é o padrão de web component
app.config.compilerOptions.isCustomElement = (tag) => tag.includes("-");

app.mount("#app");

customElements.define("profile-card", ProfileCard);
