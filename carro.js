const carro = {
    ligado: false,
    velocidade: 0,
    zeraStatus: function (){
        return this.ligado ? 'ligado' : 'desligado';
    },
    imprimeStatusVelocidade: function(){
        console.log(`Carro ${this.zeraStatus()}. Velocidade : ${this.velocidade} km/h.`)
    },
    ligar: function(){
        if(this.ligado){
            console.log("Esse carro já está ligado");
        }else{
            this.ligado = true;
            this.imprimeStatusVelocidade();
        }
    },
    desligar: function (){
        if(!this.ligado){
            console.log("O carro já está desligado");
        }else{
            if (this.velocidade > 0){
                console.log('Não é possível desligar um carro em movimento');
            }else{
                this.ligado = false;
                this.velocidade = 0;
                this.imprimeStatusVelocidade();
            }
        }
    },
    acelerar: function (){
        if(!this.ligado){
            this.ligado = true;
        }       
        this.velocidade += 10;
        this.imprimeStatusVelocidade();
    },
    desacelerar: function (){
        if(!this.ligado){
            console.log("Não é possível desacelerar um carro desligado.");
        }else{
            this.velocidade -= 10;
            if(this.velocidade === 0){
                this.ligado = false;
            }
            this.imprimeStatusVelocidade();
        }
    },

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