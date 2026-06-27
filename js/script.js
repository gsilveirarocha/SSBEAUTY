const inputHome = document.getElementById("searchHome");

if (inputHome) {

    inputHome.addEventListener("input", (e) => {

        const lista = window.buscarProdutos(e.target.value)
            .slice(0, 4);

        const container = document.getElementById("homeProducts");

        container.innerHTML = "";

        lista.forEach(produto => {

            container.innerHTML += `
                <div class="product">
                    <img src="${produto.imagem}">
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                    <button onclick="adicionarCarrinho(${produto.id})">
                        Adicionar
                    </button>
                </div>
            `;
        });
    });
}