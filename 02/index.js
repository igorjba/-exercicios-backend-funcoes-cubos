const carro = {
    ligado: false,
    velocidade: 0,
    devolveStatusTexto: function () {
        return this.ligado ? "ligado" : "desligado";
    },
    ligar: function () {
        if (this.ligado === true) {
            console.log("Este carro está ligado.");
        } else {
            this.ligado = true;
            this.imprimeStatusEVelocidade();
        }
    },
    desligar: function () {
        if (this.ligado === false) {
            console.log("Este carro já está desligado.");
        } else if (this.ligado === true && this.velocidade === 0) {
            this.ligado = false;
            this.velocidade = 0;
            this.imprimeStatusEVelocidade();
        } else {
            console.log("Não é possível desligar um carro em movimento.")
        }
    },
    acelerar: function () {
        if (this.ligado === false) {
            this.ligado = true;
        }

        this.velocidade += 10;
        this.imprimeStatusEVelocidade();
    },
    desacelerar: function () {
        if (this.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else if (this.velocidade === 0) {
            this.ligado = false;
        } else {
            this.velocidade = this.velocidade - 10;
            if (this.velocidade === 0) {
                this.ligado = false;
            }
            this.imprimeStatusEVelocidade();
        }
    },
    imprimeStatusEVelocidade: function () {
        console.log(`Carro ${this.devolveStatusTexto()}. Velocidade: ${this.velocidade}.`);
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();