const homeContainer = document.getElementById("homeProducts");

// 🔥 pega apenas alguns produtos (destaque)
function getDestaques() {
    return produtos.slice(0, 4);
}

// 🔥 renderiza
function renderHome() {

    if (!homeContainer) return;

    const lista = getDestaques();

    homeContainer.innerHTML = "";

    lista.forEach(produto => {

        homeContainer.innerHTML += `
            <div class="product">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <h3>${produto.nome}</h3>

                <p>R$ ${produto.preco.toFixed(2)}</p>

                <button onclick="adicionarCarrinho(${produto.id})">
                    Adicionar
                </button>

            </div>
        `;
    });
}

renderHome();