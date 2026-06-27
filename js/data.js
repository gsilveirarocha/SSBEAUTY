// ==============================
// BANCO DE PRODUTOS SS BEAUTY
// ==============================

const produtos = [

    // =========================
    // HIGIENE E CUIDADOS
    // =========================
    {
        id: 1,
        nome: "Lovely Lenço Umedecido (Kiwi, Maracujá, Morango e Pitaya)",
        categoria: "higiene",
        preco: 10.00,
        imagem: "img/Lovely Lenço Umedecido Kiwi,Maracujá,Morango e Pytaia.jpeg",
        descricao: "Lenços umedecidos com fragrâncias suaves para limpeza e refrescância no dia a dia."
    },
    {
        id: 2,
        nome: "Pregadeiras",
        categoria: "higiene",
        preco: 10.00,
        imagem: "img/Pregadeiras.jpeg",
        descricao: "Acessórios práticos e delicados para prender os cabelos com estilo e conforto."
    },
    {
        id: 3,
        nome: "Touca de Cetim",
        categoria: "higiene",
        preco: 10.00,
        imagem: "img/Touca de Cetim.jpeg",
        descricao: "Ajuda a proteger os fios, reduzindo o frizz e preservando os penteados durante o sono."
    },

    // =========================
    // CUIDADOS COM A PELE
    // =========================
    {
        id: 4,
        nome: "Face Beautiful Máscara Facial Rosa Mosqueta",
        categoria: "pele",
        preco: 10.00,
        imagem: "img/Face Beautiful Máscara Facial Rosa Mosqueta.jpeg",
        descricao: "Máscara facial hidratante que auxilia na nutrição e revitalização da pele."
    },
    {
        id: 5,
        nome: "Face Beautiful Máscara Facial Vitamina C",
        categoria: "pele",
        preco: 10.00,
        imagem: "img/Face Beautiful Máscara Facial Vitamina C.jpeg",
        descricao: "Máscara facial enriquecida com Vitamina C para uma pele mais iluminada e uniforme."
    },
    {
        id: 6,
        nome: "Love Primer Vitamina C",
        categoria: "pele",
        preco: 10.00,
        imagem: "img/Love Primer Vitamina C.jpeg",
        descricao: "Primer facial que prepara a pele para a maquiagem, proporcionando suavidade e luminosidade."
    },
    {
        id: 7,
        nome: "Lady Beauty Skin Pro Água Micelar",
        categoria: "pele",
        preco: 10.00,
        imagem: "img/Lady Beauty Skin Pro Água Micelar.jpeg",
        descricao: "Limpa, purifica e remove impurezas da pele de forma suave e eficiente."
    },

    // =========================
    // MAQUIAGEM
    // =========================
    {
        id: 8,
        nome: "Lady Beauty Pó Translúcido",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Lady Beauty Pó Translúcido.jpeg",
        descricao: "Controla oleosidade e prolonga a duração da maquiagem."
    },
    {
        id: 9,
        nome: "Lápis Preto para Olhos",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Lápis Preto para Olhos.jpeg",
        descricao: "Destaca o olhar com traços precisos e marcantes."
    },
    {
        id: 10,
        nome: "LipHoney Gloss Labial",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/LipHoney Gloss Labial.jpeg",
        descricao: "Brilho intenso para lábios hidratados e bonitos."
    },
    {
        id: 11,
        nome: "Vivai Hidra Gloss Labial - Transparente",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Hidra Gloss Labial.jpeg",
        descricao: "Gloss hidratante com brilho confortável."
    },
    {
        id: 33,
        nome: "Vivai Hidra Gloss Labial - Marrom",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Hidra Gloss Labial.jpeg",
        descricao: "Gloss hidratante com brilho confortável."
    },
    {
        id: 34,
        nome: "Vivai Hidra Gloss Labial - Vermelho",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Hidra Gloss Labial.jpeg",
        descricao: "Gloss hidratante com brilho confortável."
    },
    {
        id: 12,
        nome: "Vivai Iluminador - Cor 1 Prata/Branco Perolado",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Iluminador.jpeg",
        descricao: "Realça pontos estratégicos do rosto com brilho sofisticado."
    },
    {
        id: 37,
        nome: "Vivai Iluminador - Cor 3 Champanhe/Dourado Claro",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Iluminador.jpeg",
        descricao: "Realça pontos estratégicos do rosto com brilho sofisticado."
    },
    {
        id: 38,
        nome: "Vivai Iluminador - Cor 4 Dourado Intenso/Bronze",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Iluminador.jpeg",
        descricao: "Realça pontos estratégicos do rosto com brilho sofisticado."
    },
    {
        id: 13,
        nome: "Vivai La Belle Blush - Tom 1 Rosa Claro/Suave",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai La Belle Blush.jpeg",
        descricao: "Blush com acabamento suave e natural."
    },
    {
        id: 35,
        nome: "Vivai La Belle Blush - Tom 3 Rosa Queimado/Malva",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai La Belle Blush.jpeg",
        descricao: "Blush com acabamento suave e natural."
    },
    {
        id: 36,
        nome: "Vivai La Belle Blush - Tom 4 Marrom/Vinho",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai La Belle Blush.jpeg",
        descricao: "Blush com acabamento suave e natural."
    },
    {
        id: 14,
        nome: "Vivai Máscara de Cílios",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Máscara de Cílios.jpeg",
        descricao: "Define e valoriza os cílios."
    },
    {
        id: 15,
        nome: "Vivai Pó de Fada",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Pó de Fada.jpeg",
        descricao: "Iluminador com partículas brilhantes."
    },
    {
        id: 16,
        nome: "Vivai Pó Translúcido Chocolate",
        categoria: "maquiagens",
        preco: 10.00,
        imagem: "img/Vivai Pó Translucido chocolate.jpeg",
        descricao: "Finalização natural da maquiagem."
    },

    // =========================
    // SOBRANCELHAS
    // =========================
    {
        id: 17,
        nome: "Vivai Modelador de Sobrancelhas",
        categoria: "sobrancelhas",
        preco: 10.00,
        imagem: "img/Vivai Modelador de Sobrancelhas.jpeg",
        descricao: "Alinha e fixa os fios."
    },
    {
        id: 18,
        nome: "Vivai Sombra para Sobrancelhas",
        categoria: "sobrancelhas",
        preco: 10.00,
        imagem: "img/Vivai Sombra para Sobrancelhas.jpeg",
        descricao: "Preenche falhas com naturalidade."
    },
    {
        id: 19,
        nome: "Tatuagem para Sobrancelhas",
        categoria: "sobrancelhas",
        preco: 10.00,
        imagem: "img/Tatuagem para Sobrancelhas.jpeg",
        descricao: "Definição duradoura."
    },

    // =========================
    // ACESSÓRIOS
    // =========================
    {
        id: 20,
        nome: "Esponja Beauty Blender",
        categoria: "acessorios",
        preco: 10.00,
        imagem: "img/Esponja Beauty Blender.jpeg",
        descricao: "Aplicação uniforme de maquiagem."
    },
    {
        id: 21,
        nome: "Kit de Pincéis para Maquiagem",
        categoria: "acessorios",
        preco: 10.00,
        imagem: "img/Pinceis para Maquiagem.jpeg",
        descricao: "Acabamento profissional."
    },
    {
        id: 22,
        nome: "Necessaire",
        categoria: "acessorios",
        preco: 10.00,
        imagem: "img/Necessaire.jpeg",
        descricao: "Organização prática dos produtos."
    },

// =========================
    // SEMIJOIAS
    // =========================

{
    id: 23,
    nome: "Brincos Elegantes",
    categoria: "semijoias",
    preco: 10.00,
    imagem: "img/Brinco 1.jpeg",
    descricao: "Brincos delicados e modernos que valorizam sua beleza e combinam com diferentes ocasiões."
},
{
    id: 24,
    nome: "Brincos Elegantes",
    categoria: "semijoias",
    preco: 10.00,
    imagem: "img/Brinco 2.jpeg",
    descricao: "Brincos delicados e modernos que valorizam sua beleza e combinam com diferentes ocasiões."
},
{
    id: 25,
    nome: "Brincos Elegantes",
    categoria: "semijoias",
    preco: 10.00,
    imagem: "img/Brinco 3.jpeg",
    descricao: "Brincos delicados e modernos que valorizam sua beleza e combinam com diferentes ocasiões."
},
{
    id: 26,
    nome: "Kit Relógio Dourado Mostrador Rosa",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Relógio Dourado Mostrador Rosa.jpeg",
    descricao: "Relógio dourado com mostrador rosa, aro em strass, pulseiras delicadas e 3 pares de brincos. Um conjunto moderno e feminino para completar seu visual."
},
{
    id: 27,
    nome: "Kit Relógio Retangular Dourado com Olho Grego",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Relógio Retangular Dourado com Olho Grego.jpeg",
    descricao: "Kit com relógio dourado de visor retangular, pulseiras delicadas e 3 pares de brincos. Elegância e estilo para qualquer ocasião."
},
{
    id: 28,
    nome: "Kit Relógio Rosé com Cristais",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Relógio Rosé com Cristais.jpeg",
    descricao: "Kit com relógio rosé, pulseira delicada e 3 pares de brincos. Um conjunto clássico e elegante para qualquer ocasião."
},
{
    id: 29,
    nome: "Kit Relógio Gota Dourado",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Relógio Gota Dourado.jpeg",
    descricao: "Design exclusivo e delicado. Relógio em formato de gota, acompanhado de pulseira com cristais e 2 pares de brincos. Um conjunto refinado para qualquer ocasião."
},
{
    id: 30,
    nome: "Kit Relógio Prata Borboleta",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Relógio Prata Borboleta.jpeg",
    descricao: "Kit com relógio prateado, pulseira delicada e 3 pares de brincos. Elegância e brilho para complementar qualquer look."
},
{
    id: 31,
    nome: "Kit Relógio Octogonal Prata",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Relógio Octogonal Prata.jpeg",
    descricao: "Kit com relógio prateado de caixa octogonal, pulseira estilo berloque e 3 pares de brincos. Moderno, elegante e versátil."
},
{
    id: 32,
    nome: "Kit Smartwatch Dourado",
    categoria: "semijoias",
    preco: 70.00,
    imagem: "img/Kit Smartwatch Dourado.jpeggit",
    descricao: "Kit com smartwatch, pulseira em malha magnética, pulseira com cristais e 3 pares de brincos. Tecnologia e elegância no dia a dia."
}
];

// ==============================
// GLOBAL
// ==============================
window.produtos = produtos;