const inquirer = require("inquirer");
const fs = require("fs");

console.log('gorrila')

menu();

function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Seleciona a opção desejada",
        choices: [
          "criar uma conta",
          "depositar dinheiro",
          "sacar dinheiro",
          "consultar saldo",
          "sair",
        ],
      },
    ])
    .then((answer) => {
      if (answer.action == "criar uma conta") {
        console.log("obrigado por escolher esse banco do caralho !");
        criarConta();
      } else if (answer.action == "depositar dinheiro"){
        depositarDinheiro();

      }
    })
    .catch((err) => console.log(err));
}

function depositarDinheiro() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nomeDaConta",
        message: "Digiti o nome da conta:",
      },
      {
        type: 'input',
        name: 'valor',
        message: 'informe o valor que quer depositar'
      }
    ])
    .then((answer) => {
      return menu();
    }).catch((err) => console.log(err));
}

// if(fs.existsSync(`contas/${nome}.json`)){
//   return true;
// } else {
//  return false;
// }

function criarConta() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "nomeDaConta",
        message: "digite o nome da conta que vai ser criada",
      },
    ])
    .then((answer) => {
      fs.writeFileSync(`contas/${answer.nomeDaConta}.json`, '{"balance":0}');
      return menu();
    }).catch((err) => console.log(err));
}
