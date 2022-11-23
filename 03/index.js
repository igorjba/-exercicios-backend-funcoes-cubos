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
    imprimirResumo: function () {
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();
    },
    addProduto: function () {
        let produtoIgual = false;
        for (let i = 0; i < this.produtos.length; i++) {
            if (produto.id === this.produtos[i].id) {
                this.produtos[i].qtd += novaBermuda.qtd;
                produtoIgual = true;
            }
        } if (produtoIgual == false) {
            this.produtos.push(produto)
        }
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (let i = 0; i < this.produtos.length; i++) {

            totalDeItens = totalDeItens + this.produtos[i].qtd;
        } return totalDeItens
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            totalAPagar = totalAPagar + this.produtos[i].precoUnit * this.produtos[i].qtd;
        } return totalAPagar
    },
    calcularDesconto: function () {
        let desconto = 0;
        let descontoItemGratis = 0;
        let descontoPercentual = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            let somaDeItens = 0;

            somaDeItens = somaDeItens + this.produtos[i].qtd;

            let itemMaisBaratoAteAgora = this.produtos[0].precoUnit;

            if (itemMaisBaratoAteAgora > this.produtos[i].precoUnit) {
                itemMaisBaratoAteAgora = this.produtos[i].precoUnit;
            }
            if (this.calcularTotalDeItens() > 4) {
                descontoItemGratis = itemMaisBaratoAteAgora;
            } else {
                descontoItemGratis = this.calcularTotalAPagar();
            }
            if (this.calcularTotalAPagar() > 10000) {
                descontoPercentual = (this.calcularTotalAPagar() / 100) * 10;
            } else {
                descontoPercentual = this.calcularTotalAPagar();
            }
        } if (descontoItemGratis > descontoPercentual) {
            desconto = descontoItemGratis;
        } else {
            desconto = descontoPercentual;
        } return desconto
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}
        
Item ${this.produtos.length + 1} = ${this.produtos[1].nome} - ${this.produtos[1].qtd} und - R$ ${((this.produtos[1].qtd * this.produtos[1].precoUnit) / 100).toFixed(2)}
Item ${this.produtos.length + 1} = ${this.produtos[0].nome} - ${this.produtos[0].qtd} und - R$ ${((this.produtos[0].qtd * this.produtos[0].precoUnit) / 100).toFixed(2)}
        
Total de itens: ${this.calcularTotalDeItens()}
Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}

Desconto: R$ ${(this.calcularDesconto() / 100).toFixed(2)}

Totalizando: R$ ${((this.calcularTotalAPagar() - this.calcularDesconto()) / 100).toFixed(2)}`);
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

// carrinho.addProduto(novaBermuda);
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

// carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();