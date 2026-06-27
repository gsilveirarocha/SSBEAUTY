// =========================
// CARRINHO GLOBAL
// =========================

function getCart(){
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function saveCart(cart){
    localStorage.setItem("carrinho", JSON.stringify(cart));
    renderCart();
    updateCount();
}

// =========================
// ABRIR / FECHAR CARRINHO
// =========================

function toggleCart(){
    document.getElementById("cartSidebar").classList.toggle("active");
    document.getElementById("backdrop").classList.toggle("active");
}

// =========================
// ADICIONAR PRODUTO
// =========================

function adicionarCarrinho(id){

    let cart = getCart();

    const produto = window.produtos.find(p => p.id === id);

    if(!produto){
        console.error("Produto não encontrado:", id);
        return;
    }

    let item = cart.find(p => p.id === id);

    if(item){
        item.qtd += 1;
    } else {
        cart.push({...produto, qtd: 1});
    }

    saveCart(cart);
}

// =========================
// RENDER CARRINHO
// =========================

function renderCart(){

    const cart = getCart();
    const container = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");

    if(!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.preco * item.qtd;

        container.innerHTML += `
            <div class="cart-item">

                <div>
                    <strong>${item.nome}</strong><br>
                    <small>R$ ${item.preco.toFixed(2)}</small>
                </div>

                <div class="qty-controls">

                    <button onclick="decrease(${index})">-</button>
                    <span>${item.qtd}</span>
                    <button onclick="increase(${index})">+</button>

                </div>

            </div>
        `;
    });

    totalEl.innerText = total.toFixed(2);
}

// =========================
// CONTROLE QUANTIDADE
// =========================

function decrease(index){

    let cart = getCart();

    cart[index].qtd--;

    if(cart[index].qtd <= 0){
        cart.splice(index, 1);
    }

    saveCart(cart);
}

function increase(index){

    let cart = getCart();

    cart[index].qtd++;

    saveCart(cart);
}

// =========================
// CONTADOR
// =========================

function updateCount(){

    let cart = getCart();

    let count = cart.reduce((sum, item) => sum + item.qtd, 0);

    const el = document.getElementById("cartCount");

    if(el){
        el.innerText = count;
    }
}

// =========================
// FINALIZAR PEDIDO WHATSAPP
// =========================

function finalizarPedido(){

    let cart = getCart();

    if(cart.length === 0){
        alert("Carrinho vazio!");
        return;
    }

    // 📌 dados cliente
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const pagamento = document.getElementById("pagamento").value;
    const obs = document.getElementById("obs").value;

    if(!nome || !telefone || !endereco){
        alert("Preencha os dados obrigatórios!");
        return;
    }

    // 📌 pedido e data
    const pedidoId = Math.floor(Math.random() * 99999);
    const data = new Date().toLocaleString();

    let total = 0;

    // =========================
    // MENSAGEM (VERSÃO SEGURA)
    // =========================

    let mensagem = "";

    mensagem += "============================\n";
    mensagem += `PEDIDO #${pedidoId}\n`;
    mensagem += "============================\n\n";

    mensagem += "CLIENTE\n";
    mensagem += `${nome}\n`;
    mensagem += `${telefone}\n\n`;

    mensagem += "ENDERECO\n";
    mensagem += `${endereco}\n`;
    mensagem += `${bairro} - ${cidade}\n\n`;

    mensagem += "PRODUTOS\n";

    cart.forEach(item => {

        let subtotal = item.preco * item.qtd;
        total += subtotal;

        mensagem += `${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2)}\n`;
    });

    mensagem += "\n";
    mensagem += "----------------------------\n";
    mensagem += `TOTAL: R$ ${total.toFixed(2)}\n`;
    mensagem += "----------------------------\n\n";

    mensagem += `PAGAMENTO: ${pagamento}\n`;
    mensagem += `OBS: ${obs || "Nenhuma"}\n`;
    mensagem += `DATA: ${data}\n`;

    // 📌 WhatsApp
    const numero = "5527998212759";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    // limpa carrinho
    localStorage.removeItem("carrinho");

    fecharCheckout();
    renderCart();
    updateCount();
}

// =========================
// CHECKOUT MODAL
// =========================

function abrirCheckout(){
    document.getElementById("checkoutModal").classList.add("active");
}

function fecharCheckout(){
    document.getElementById("checkoutModal").classList.remove("active");
}

// =========================
// INICIALIZAÇÃO
// =========================

renderCart();
updateCount();