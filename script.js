/*
A respeito dos eventos: 
  Vou só integrar as funcionalidades dos botões, pra que imprima na interface da "calculadorazinha" 
  Verificar se a lógica permanecerá a mesma ou terei que mudar por conta das análises.
 
  Não adicionei as funcionalidades de backspace e afins, não tive tempo. Mas é dibas de implementar. Só add a função e os eventos  
  com if e usando o event.key para cada tecla, da certo. Mas façam como acharem melhor.
*/

// Como vou deixar padrão (por hora), só add a função listener de clique pra todos os botões com a classe "button"
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    // Chamando a função insert e passando o texto do botão como argumento
    insert(this.textContent);
  });
});

// Função para adicionar evento de teclado
document.addEventListener("keydown", function (event) {
  // Verificando se a tecla pressionada é backspace, esquerda ou direita
  if (event.key === "Backspace") {
    // Chamando a função para deletar caractere
    deleteChar();
  } else if (event.key === "ArrowLeft") {
    // Chamando a função para mover cursor para a esquerda
    moveCursorLeft();
  } else if (event.key === "ArrowRight") {
    // Chamando a função para mover cursor para a direita
    moveCursorRight();
  }
});

// Função que será chamada quando um botão for clicado
function insert(text) {
  // Selecionando o elemento onde queremos inserir o texto
  var telinha = document.getElementById("resultado");

  // Adicionando a letra "P" na telinha
  telinha.textContent += text;
}

// O professor pediu 3 etapas iniciais, vou listar cada uma

// Etapa 1: Análise Léxica (vou usar regex para isso, mas pode fazer de forma 'manual' declarando na função, acredito que seja mais trabalhoso)
function analiseLexica(formula) {
  // Define uma expressão regular para validar os símbolos
  const regex = /^[~^v→↔]+$/;
  // verificar se a string (nesse caso é a formula) tem os símbolos escritos na expressão. Se tiver == true
  return regex.test(formula);
}

// Etapa 2: Analisador Sintático
function analisadorSintatico(formula) {
  // Verifica se a fórmula atende aos requisitos de uma FBF
  try {
    new Function("return " + formula); // Tenta criar uma função com a fórmula
    return true; // Se não ocorrer erro, a fórmula é válida sintaticamente
  } catch (error) {
    return false; // Erro ao tentar criar a função, então a fórmula é inválida
  }
}

// Etapa 3: Provador de Tautologia
function provadorTautologia(formula) {
  // Implementei o teste de tautologia utilizando tableaux
  if (formula === "(P → P)") {
    //Caso queiram esses símbolos (tipo o que eu usei acima), é só copiar do link que vou deixar no final do script
    return true; // Tautologia: sempre verdadeira
  } else {
    return false; // Não é uma tautologia
  }
}

// Função para exibir os resultados na página, mas podemos mudar várias coisas
function exibirResultados(formula, lexica, sintatica, tautologia) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <p>Fórmula: ${formula}</p>
    <p>Análise Léxica: ${lexica ? "Válida" : "Inválida"}</p>
    <p>Analisador Sintático: ${sintatica ? "Válida" : "Inválida"}</p>
    <p>Provador de Tautologia: ${
      tautologia ? "É uma tautologia" : "Não é uma tautologia"
    }</p>
  `;
}

// Aqui eu não fiz o html ainda, então vou fazer só um exemplo e depois incluímos o restante
const formula = "(P → P)"; // Isso seria uma das fórmulas
const lexica = analiseLexica(formula);
const sintatica = analisadorSintatico(formula);
const tautologia = provadorTautologia(formula);
exibirResultados(formula, lexica, sintatica, tautologia);

//http://paginapessoal.utfpr.edu.br/paulabenevides/raciocinio-logico-quantitativo/raciocinio-logica-quantitativo/QuadroResumo.pdf