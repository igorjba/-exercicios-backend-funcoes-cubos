const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    imprimirResumo: function (carrinho) {
        let qtdTotalItens = 0;
        let precoTOtalItens = 0;

        for (let produto of carrinho.produtos) {
            qtdTotalItens += produto.qtd;
            precoTOtalItens += produto.qtd * produto.precoUnit
        }

        let precoTOtalItensTexto = precoTOtalItens / 100;

        console.log(`Cliente: Guido Bernal`)
        console.log(`Total de itens: ${qtdTotalItens} itens`);
        console.log(`Total a pagar: R$ ${(precoTOtalItensTexto).toFixed(2)}`);
    }

};

function addProdutoAoCarrinhoa(carrinho, produto) {
    let indiceProdutoExistente = -1;

    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].id === produto.id) {
            indiceProdutoExistente = i;
            break;
        }
    }

    if (indiceProdutoExistente === -1) {
        carrinho.produtos[carrinho.produtos.length] = produto;
    } else {
        carrinho.produtos[indiceProdutoExistente].qtd += produto.qtd;
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

addProdutoAoCarrinhoa(carrinho, novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

addProdutoAoCarrinhoa(carrinho, novoTenis);

carrinho.imprimirResumo(carrinho);

// Cliente: Guido Bernal
// Total de itens: 5 itens
// Total a pagar: R$ 190,00