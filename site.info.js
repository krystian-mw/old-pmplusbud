export const Menu = [
  { text: "Strona Główna", url: "/" },
  { text: "Oferta", url: "/oferta" },
  { text: "Blog", url: "/blog" },
//   { text: "Strefa Klienta", url: "/strefa-klienta" },
  { text: "Kontakt", url: "/kontakt" },
];

export const Validators = {
  Name: /^[a-zA-Z]+[\s|-]?[a-zA-Z]+[\s|-]?[a-zA-Z]+$/,
  Email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const ContainerClass = 'container-fluid container-lg'