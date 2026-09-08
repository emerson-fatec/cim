// Catálogo real da loja, extraído dos PDFs de catálogo de produtos.
// Para atualizar um produto: edite nome, preço ou "image" (caminho em assets/products/).

const CATEGORIES = [
  { slug: "botoes", name: "Bottons Personalizados", emoji: "🔘" },
  { slug: "chaveiros", name: "Chaveiros Personalizados", emoji: "🔑" },
  { slug: "lembrancinhas", name: "Lembrancinhas & Tags", emoji: "🎁" },
  { slug: "casa", name: "Casa & Sublimação", emoji: "🏠" },
  { slug: "bolsas", name: "Bolsas & Necessaires", emoji: "👜" },
  { slug: "3d", name: "Produtos 3D", emoji: "🖨️" },
  { slug: "papelaria", name: "Papelaria de Casamento", emoji: "💌" },
];

const PRODUCTS = [
  // Bottons
  { name: "Bottons Alfinete 5,5cm", category: "botoes", price: "A partir de R$ 2,40", image: "assets/products/bottons-alfinete-55.jpg" },
  { name: "Bottons Alfinete 3,5cm", category: "botoes", price: "A partir de R$ 2,00", image: "assets/products/bottons-alfinete-35.jpg" },
  { name: "Bottons Passante 3,5cm", category: "botoes", price: "A partir de R$ 2,00", image: "assets/products/bottons-passante-35.jpg" },

  // Chaveiros
  { name: "Chaveiro Espelho 5,5cm", category: "chaveiros", price: "A partir de R$ 3,99", image: "assets/products/chaveiro-espelho-55.jpg" },
  { name: "Chaveiro Dupla Face 3,5cm", category: "chaveiros", price: "A partir de R$ 2,66", image: "assets/products/chaveiro-dupla-face-35.jpg" },
  { name: "Chaveiro Uma Face 3,5cm", category: "chaveiros", price: "A partir de R$ 1,50", image: "assets/products/chaveiro-uma-face-35.jpg" },
  { name: "Chaveiro Abridor de Garrafa 5,5cm", category: "chaveiros", price: "A partir de R$ 6,00", image: "assets/products/abridor-garrafa-55.jpg" },
  { name: "Chaveiro Espelho com Tassel 5,5cm", category: "chaveiros", price: "A partir de R$ 4,50", image: "assets/products/chaveiro-espelho-tassel-55.jpg" },
  { name: "Chaveiro em MDF 5,5cm", category: "chaveiros", price: "A partir de R$ 2,50", image: "assets/products/chaveiro-mdf-55.jpg" },
  { name: "Chaveiro Dupla Face 3,5cm NFC com Tassel", category: "chaveiros", price: "R$ 30,00", image: "assets/products/chaveiro-nfc-tassel.jpg" },
  { name: "Chaveiro Porta Palheta", category: "chaveiros", price: "R$ 15,00", image: "assets/products/chaveiro-porta-paleta.jpg" },
  { name: "Chaveiro Pata", category: "chaveiros", price: "A partir de R$ 2,70", image: "assets/products/chaveiro-pata.jpg" },
  { name: "Chaveiro Abridor de Lata", category: "chaveiros", price: "R$ 15,00", image: "assets/products/chaveiro-abridor-lata.jpg" },
  { name: "Chaveiro Gato com Tassel", category: "chaveiros", price: "R$ 20,00", image: "assets/products/chaveiro-gato-tassel.jpg" },
  { name: "Chaveiro Sensorial Estrela e Coração", category: "chaveiros", price: "R$ 18,00", image: "assets/products/chaveiro-sensorial-estrela-coracao.jpg" },
  { name: "Chaveiro Carta com Foto", category: "chaveiros", price: "R$ 20,00", image: "assets/products/chaveiro-carta-foto.jpg" },
  { name: "Lixa de Unha MDF (chaveiro)", category: "chaveiros", price: "A partir de R$ 3,00", image: "assets/products/lixa-unha-mdf.jpg" },

  // Lembrancinhas & Tags
  { name: "Espelho Personalizado 5,5cm", category: "lembrancinhas", price: "A partir de R$ 2,80", image: "assets/products/espelho-personalizado-55.jpg" },
  { name: "Tag Personalizada + Brinco", category: "lembrancinhas", price: "A partir de R$ 1,60", image: "assets/products/tag-brinco.jpg" },
  { name: "Tag + Caneta Personalizada", category: "lembrancinhas", price: "A partir de R$ 2,50", image: "assets/products/tag-caneta.jpg" },
  { name: "Tag + Lápis Personalizado", category: "lembrancinhas", price: "A partir de R$ 3,50", image: "assets/products/tag-lapis.jpg" },
  { name: "Tag + Xuxinha de Cabelo", category: "lembrancinhas", price: "A partir de R$ 1,45", image: "assets/products/tag-xuxinha.jpg" },
  { name: "Kit Tag com Clipe Personalizado", category: "lembrancinhas", price: "R$ 25,00", image: "assets/products/kit-tag-clipe.jpg" },
  { name: "Tag + Manteiga de Cacau Personalizada", category: "lembrancinhas", price: "A partir de R$ 6,50", image: "assets/products/tag-manteiga-cacau.jpg" },
  { name: "Tag + Lixa de Unha", category: "lembrancinhas", price: "A partir de R$ 1,30", image: "assets/products/tag-lixa-unha.jpg" },
  { name: "Bala Personalizada", category: "lembrancinhas", price: "A partir de R$ 0,60", image: "assets/products/bala-personalizada.jpg" },
  { name: "Clipe Personalizado 3,5cm", category: "lembrancinhas", price: "A partir de R$ 1,80", image: "assets/products/clipe-personalizado-35.jpg" },
  { name: "Marca Página de Acrílico", category: "lembrancinhas", price: "R$ 20,00", image: "assets/products/marca-pagina-acrilico.jpg" },
  { name: "Prendedor de Embalagem (6 un.)", category: "lembrancinhas", price: "R$ 12,50", image: "assets/products/prendedor-embalagem.jpg" },

  // Casa & Sublimação
  { name: "Porta-copo em MDF The Beatles (kit 4 + suporte)", category: "casa", price: "R$ 35,00", image: "assets/products/porta-copo-beatles.jpg" },
  { name: "Porta-copo em MDF Yellow Submarine (kit 4)", category: "casa", price: "R$ 29,00", image: "assets/products/porta-copo-yellow-submarine.jpg" },
  { name: "Quadro MDF A4", category: "casa", price: "R$ 30,00", image: "assets/products/quadro-a4.jpg" },
  { name: "Caneca Personalizada", category: "casa", price: "R$ 30,00", image: "assets/products/caneca-personalizada.jpg" },
  { name: "Azulejo Personalizado 15x15cm", category: "casa", price: "R$ 30,00", image: "assets/products/azulejo-personalizado.jpg" },
  { name: "Kit Ímã Magnético para Livro (3 un.)", category: "casa", price: "R$ 20,00", image: "assets/products/ima-magnetico-livro.jpg" },
  { name: "Ímã para Geladeira 4,9cm", category: "casa", price: "A partir de R$ 2,50", image: "assets/products/ima-geladeira-nossa-senhora.jpg" },
  { name: "Porta-retrato Ímã de Geladeira", category: "casa", price: "R$ 24,50", image: "assets/products/porta-retrato-ima.jpg" },
  { name: "Planner Diário Ímã de Geladeira", category: "casa", price: "R$ 25,00", image: "assets/products/planner-diario-ima.jpg" },
  { name: "Cubo Infinito", category: "casa", price: "R$ 30,00", image: "assets/products/cubo-infinito.jpg" },

  // Bolsas & Necessaires
  { name: "Necessaire em Tecido Poliéster", category: "bolsas", price: "A partir de R$ 10,00", image: "assets/products/necessaire-poliester.jpg" },
  { name: "Sacola Personalizada", category: "bolsas", price: "R$ 16,50", image: "assets/products/sacola-personalizada.jpg" },

  // Produtos 3D (PLA)
  { name: "Chaveiro Giratório Dupla Face", category: "3d", price: "A partir de R$ 4,00", image: "assets/products/chaveiro-giratorio-dupla-face.jpg" },
  { name: "Chaveiro Coruja + Card", category: "3d", price: "A partir de R$ 3,10", image: "assets/products/chaveiro-coruja-card.jpg" },
  { name: "Porta Celular Cachorro", category: "3d", price: "A partir de R$ 4,00", image: "assets/products/porta-celular-cachorro.jpg" },
  { name: "Foto Ímã Polaroid para Geladeira", category: "3d", price: "A partir de R$ 4,00", image: "assets/products/ima-polaroid-pet.jpg" },
  { name: "Chaveiro com Nome", category: "3d", price: "A partir de R$ 4,00", image: "assets/products/chaveiro-com-nome.jpg" },
  { name: "Chaveiro Maçã com Tassel e Inicial do Nome", category: "3d", price: "R$ 16,50", image: "assets/products/chaveiro-maca-tassel.jpg" },
  { name: "Chaveiro Flor com Espelho e Pingente de Flor", category: "3d", price: "A partir de R$ 3,50", image: "assets/products/chaveiro-flor-espelho.jpg" },
  { name: "Chaveiro Girafa", category: "3d", price: "A partir de R$ 4,00", image: "assets/products/chaveiro-girafa.jpg" },
  { name: "Chaveiro Giratório The Beatles", category: "3d", price: "R$ 15,00", image: "assets/products/chaveiro-giratorio-beatles.jpg" },
  { name: "Chaveiro Giratório Nossa Senhora + Card Oração", category: "3d", price: "A partir de R$ 5,00", image: "assets/products/chaveiro-giratorio-nossa-senhora-card.jpg" },
  { name: "Chaveiro PLA Nossa Senhora Aparecida + Card Oração", category: "3d", price: "A partir de R$ 3,50", image: "assets/products/chaveiro-pla-nossa-senhora-aparecida-card.jpg" },
  { name: "Bottons Autismo + Card Personalizado", category: "3d", price: "A partir de R$ 5,50", image: "assets/products/bottons-autismo-card.jpg" },
  { name: "Chaveiro Jesus Formato Peixe", category: "3d", price: "A partir de R$ 3,50", image: "assets/products/chaveiro-jesus-peixe.jpg" },
  { name: "Chaveiro Giratório Iron Maiden", category: "3d", price: "R$ 15,00", image: "assets/products/chaveiro-giratorio-iron-maiden.jpg" },
  { name: "Chaveiro Borboleta Azul", category: "3d", price: "A partir de R$ 2,50", image: "assets/products/chaveiro-borboleta-azul.jpg" },
  { name: "Chaveiro Setembro Amarelo com Pingente de Flor", category: "3d", price: "A partir de R$ 4,50", image: "assets/products/chaveiro-setembro-amarelo.jpg" },
  { name: "Chaveiro Giratório Nirvana", category: "3d", price: "R$ 15,00", image: "assets/products/chaveiro-giratorio-nirvana.jpg" },
  { name: "Chaveiro Giratório Pet (foto + nome)", category: "3d", price: "R$ 16,50", image: "assets/products/chaveiro-giratorio-pet.jpg" },
  { name: "Chaveiro Máquina de Costura PLA", category: "3d", price: "A partir de R$ 2,50", image: "assets/products/chaveiro-maquina-costura-pla.jpg" },
  { name: "Marca Página Encontro de Mulheres", category: "3d", price: "A partir de R$ 1,00", image: "assets/products/marca-pagina-encontro-mulheres.jpg" },

  // Papelaria de casamento (sob encomenda, sem foto no catálogo)
  { name: "Papelaria de Casamento Personalizada", category: "papelaria", price: "Sob consulta" },
];
