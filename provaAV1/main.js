const Veiculo = require('./Veiculo');
const Piloto = require('./Piloto');
const Corrida = require('./Corrida');
const api = require('./api');

let arnaldo = new Piloto('Arnaldo', 4, 15);
// console.log(arnaldo.xp());

let pedro = new Piloto('Pedro', 2, 30);
// console.log(pedro.xp());

let Felipe = new Piloto('Felipe', 5, 15);
// console.log(pedro.xp());

let carrango = new Veiculo('carro', 'corsa', 2000, 'cinza', 100)
let ferrari = new Veiculo('carro', 'ferrari', 2021, 'vermelha', 400)

let corrida1 = new Corrida;

const relatorio = function (obj) {

  api['api/v1/chegada'](obj.piloto).then((respostaDistancia) => {


    if (respostaDistancia.length == Veiculo.totalVeiculosCorrida) {
      api['api/v1/recorde']().then((resposta) => {
        corrida1.Podio(respostaDistancia);
        console.log(`O recorde é de ${resposta}`);
      }).catch(erro => console.log(erro));
    }

  }).catch(erro => console.log(erro));

  console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km');


}

ferrari.acelerando0a100(arnaldo, relatorio);
ferrari.acelerando0a100(pedro, relatorio);
ferrari.acelerando0a100(Felipe, relatorio);
// carrango.acelerando0a100(relatorio);



