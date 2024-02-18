const buttons = document.querySelectorAll("tabela-verdade button");

let expressaoLogica = ''; 
let tabelaVerdade = [];   


function insert(caractere) {
  expressaoLogica += caractere;
  document.getElementById('resultado').innerText = expressaoLogica;
}

function calcularTabelaVerdade() {
  
}

function exibirTabelaVerdade() {
  let tabelaHTML = '<table>';
  tabelaHTML += '</table>';

  document.getElementById('tabela-verdade').innerHTML = tabelaHTML;
}