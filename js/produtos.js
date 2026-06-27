// ==============================
// GARANTIA DE CARREGAMENTO SEGURO
// ==============================

window.addEventListener("DOMContentLoaded", () => {
    initProdutos();
});

// ==============================
// INIT PRINCIPAL
// ==============================

function initProdutos() {

    // ELEMENTOS
    const productsGrid = document.getElementById("productsGrid");
    const categoriaTitulo = document.getElementById("categoriaTitulo");
    const categoriaDescricao = document.getElementById("categoriaDescricao");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");

    // SEGURANÇA
    const allProducts = window.produtos || [];

    // CATEGORIA URL
    const params = new URLSearchParams(window.location.search);

    let categoria = (params.get("categoria") || "todos")
        .toLowerCase()
        .trim();

    console.log("Categoria:", categoria);
    console.log("Total produtos:", allProducts.length);

    // ==============================
    // CATEGORIAS
    // ==============================

    const categoriasInfo = {
        todos: {
            titulo: "Todos os Produtos",
            descricao: "Explore nossa coleção completa de beleza."
        },
        maquiagens: {
            titulo: "Maquiagens",
            descricao: "Produtos de maquiagem para realçar sua beleza."
        },
        pele: {
            titulo: "Cuidados com a Pele",
            descricao: "Hidratação e tratamento facial."
        },
        sobrancelhas: {
            titulo: "Sobrancelhas",
            descricao: "Definição e estilo para seu olhar."
        },
        acessorios: {
            titulo: "Acessórios",
            descricao: "Ferramentas essenciais de maquiagem."
        },
        higiene: {
            titulo: "Higiene e Cuidados",
            descricao: "Produtos para o dia a dia."
        },
        semijoias: {
            titulo: "Semi Joias",
            descricao: "Elegância e sofisticação."
        }
    };

    // ==============================
    // ESTADO GLOBAL
    // ==============================

    let searchValue = "";
    let sortValue = "";

    // ==============================
    // FILTRO BASE (CATEGORIA)
    // ==============================

    let produtosFiltrados = allProducts.filter(p => {
        return categoria === "todos" ? true : p.categoria === categoria;
    });

    // ==============================
    // HEADER
    // ==============================

    function setHeader() {

        const info = categoriasInfo[categoria] || {
            titulo: "Categoria",
            descricao: "Produtos disponíveis"
        };

        categoriaTitulo.innerText = info.titulo;
        categoriaDescricao.innerText = info.descricao;
    }

    // ==============================
    // RENDER
    // ==============================

    function render(lista){

    productsGrid.innerHTML = "";

    lista.forEach(produto => {

        productsGrid.innerHTML += `
            <div class="product-card">

                <img src="${produto.imagem}" alt="${produto.nome}">

                <h3>${produto.nome}</h3>

                <!-- 👇 AQUI A DESCRIÇÃO -->
                <p class="descricao">${produto.descricao || ""}</p>

                <p>R$ ${produto.preco.toFixed(2)}</p>

                <button onclick="adicionarCarrinho(${produto.id})">
                    Adicionar
                </button>

            </div>
        `;
    });
}

    // ==============================
    // APLICAR FILTROS (BUSCA + ORDEM)
    // ==============================

    function aplicarFiltros() {

    let lista = [];

    // 🔍 MODO BUSCA (PRIORIDADE MÁXIMA)
    if (searchValue && searchValue.length > 0) {

        lista = allProducts.filter(p =>
            p.nome.toLowerCase().includes(searchValue)
        );

    } else {

        // 📦 MODO CATEGORIA (NORMAL)
        lista = allProducts.filter(p => {
            return categoria === "todos" ? true : p.categoria === categoria;
        });
    }

    // 🔽 ORDENAÇÃO
    if (sortValue === "menor-preco") {
        lista.sort((a, b) => a.preco - b.preco);
    }

    if (sortValue === "maior-preco") {
        lista.sort((a, b) => b.preco - a.preco);
    }

    if (sortValue === "a-z") {
        lista.sort((a, b) => a.nome.localeCompare(b.nome));
    }

    render(lista);
}

    // ==============================
    // BUSCA
    // ==============================

    if (searchInput) {
        searchInput.addEventListener("input", e => {
            searchValue = e.target.value.toLowerCase().trim();
            aplicarFiltros();
        });
    }

    // ==============================
    // ORDENAÇÃO
    // ==============================

    if (sortSelect) {
        sortSelect.addEventListener("change", e => {
            sortValue = e.target.value;
            aplicarFiltros();
        });
    }

    // ==============================
    // INIT FINAL
    // ==============================

    setHeader();
    aplicarFiltros();
}