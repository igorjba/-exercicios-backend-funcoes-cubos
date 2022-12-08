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

carrinho.imprimirResumo();

// Cliente: Guido Bernal
// Total de itens: 5 itens
// Total a pagar: R$ 190,00