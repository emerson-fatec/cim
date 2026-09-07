// Dados da loja — edite aqui e todas as páginas atualizam automaticamente.
const SITE_CONFIG = {
  storeName: "CIM Personalizados",
  shortName: "CIM Personalizados",
  tagline: "Bottons, chaveiros, lembrancinhas e presentes personalizados, feitos à mão com carinho.",

  // Telefone / WhatsApp
  phoneDisplay: "(011) 99801-8600",
  phoneWhatsApp: "5511998018600", // formato internacional, sem espaços ou símbolos
  whatsappMessage: "Olá! Vi o site da CIM Personalizados e gostaria de mais informações.",

  // PREENCHER: e-mail e Instagram reais da loja
  email: "seuemail@exemplo.com",
  instagramHandle: "@_cmpersonalizado",
  instagramUrl: "https://www.instagram.com/_cmpersonalizado/",

  address: "Atendimento sob encomenda — envio para todo o Brasil",
  hours: "Segunda a Sexta, 9h às 18h",
};

function whatsappLink(customMessage) {
  const text = encodeURIComponent(customMessage || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.phoneWhatsApp}?text=${text}`;
}
