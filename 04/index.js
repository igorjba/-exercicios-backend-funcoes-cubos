const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        contaBancaria.historicos.unshift({
            tipo: "Deposito",
            valor: valor
        });
        return console.log(`Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`)
    },
    sacar: function (valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
            contaBancaria.historicos.unshift({
                tipo: "Saque",
                valor: valor
            });
        } else {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        } return console.log(`Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
    },
    extrato: function () {

        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}`);
        console.log("Histórico: ");
        for (let item of this.historicos) {
            console.log(`${item.tipo} de $ ${(item.valor / 100).toFixed(2)}`)
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();
//console.log(contaBancaria.historicos);
