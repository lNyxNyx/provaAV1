class Corrida {
    constructor() {
        this.Coredores = [];

    }
    Podio(colocados) {
        this.Corredores = colocados;
        this.Corredores.forEach(function (values, index) {
            console.log(`${index + 1} ° Colocado -   ${values}`);
        });

    }

}
module.exports = Corrida;