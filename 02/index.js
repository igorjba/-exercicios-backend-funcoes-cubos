const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log("Este carro está ligado");
        }
    },
    desligar: function () {
        if (this.ligado === false) {
            console.log("Este carro já está desligado.");
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.velocidade = this.velocidade + 10;
        }
    },
    desacelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade = this.velocidade - 10;
        }
    }
}
