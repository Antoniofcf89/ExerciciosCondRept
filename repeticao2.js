function questao1() {
    let soma = 0;

    for (let num = 1; num <= 500; num++) {
        if (num % 2 !== 0 && num % 3 === 0) {
            soma += num;
        }
    }
    document.getElementById('resultado').innerText ='A soma dos números ímpares múltiplos de 3 entre 1 e 500 é: ' + soma;
}
// questão 02

let alturas = [];
function adicionarAltura() {
    const alturaInput = document.getElementById('altura');
    const altura = parseFloat(alturaInput.value);
    if (!isNaN(altura) && altura > 0) {
        alturas.push(altura);
        alturaInput.value = ''; 
        alturaInput.focus(); 
    } else {
        alert('Por favor, insira uma altura válida.');
    }
}
function calcularAlturas() {
    if (alturas.length < 15) {
        alert('Você precisa inserir 15 alturas antes de calcular.');
        return;
    }
    const menorAltura = Math.min(...alturas);
    const maiorAltura = Math.max(...alturas);
    document.getElementById('resultado').innerText = 
        'A menor altura é: ' + menorAltura.toFixed(2) + ' metros\n' +
        'A maior altura é: ' + maiorAltura.toFixed(2) + ' metros';
}
//questão 03
const values = [];
function addValue() {
    const input = document.getElementById('valueInput');
    const value = parseFloat(input.value);

    if (!isNaN(value)) {
        values.push(value);
        input.value = ''; 
    } else {
        alert('Por favor, insira um valor numérico válido.');
    }
}
function calculate() {
    if (values.length === 0) {
        alert('Nenhum valor foi inserido.');
        return;
    }
    let positiveCount = 0;
    let negativeCount = 0;
    let sum = 0;

    for (const value of values) {
        if (value > 0) positiveCount++;
        if (value < 0) negativeCount++;
        sum += value;
    }
    const average = sum / values.length;
    const total = values.length;
    const positivePercent = (positiveCount / total) * 100;
    const negativePercent = (negativeCount / total) * 100;

    document.getElementById('average').textContent = average.toFixed(2);
    document.getElementById('positiveCount').textContent = positiveCount;
    document.getElementById('negativeCount').textContent = negativeCount;
    document.getElementById('positivePercent').textContent = positivePercent.toFixed(2) + '%';
    document.getElementById('negativePercent').textContent = negativePercent.toFixed(2) + '%';
}
// questao 04
let value = [];
let positives = 0;
let negatives = 0;

function addValue() {
    const input = document.getElementById('valueInput').value;
    const resultDiv = document.getElementById('result');
    if (input.toLowerCase() === 'sair') {
        calculate();
        return;
    }
    
    const number = parseFloat(input);
    if (!isNaN(number)) {
        values.push(number);
        if (number > 0) positives++;
        if (number < 0) negatives++;
        resultDiv.innerHTML = `<p>Valor ${number} adicionado.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Por favor, digite um número válido ou 'sair' para encerrar.</p>`;
    }
    
    document.getElementById('valueInput').value = '';
}

function calculate() {
    if (values.length === 0) {
        document.getElementById('result').innerHTML = `<p>Nenhum valor foi adicionado.</p>`;
        return;
    }

    const total = values.length;
    const sum = values.reduce((acc, val) => acc + val, 0);
    const average = sum / total;
    const positivePercentage = (positives / total) * 100;
    const negativePercentage = (negatives / total) * 100;

    document.getElementById('result').innerHTML = `
        <p>Média Aritmética: ${average.toFixed(2)}</p>
        <p>Quantidade de Valores Positivos: ${positives}</p>
        <p>Quantidade de Valores Negativos: ${negatives}</p>
        <p>Percentual de Valores Positivos: ${positivePercentage.toFixed(2)}%</p>
        <p>Percentual de Valores Negativos: ${negativePercentage.toFixed(2)}%</p> `;

    values = [];
    positives = 0;
    negatives = 0;
}
// Questão 05

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('number-form');
    const numberInput = document.getElementById('number');
    
    let countPairs = 0;
    let countOdds = 0;
    let sumPairs = 0;
    let sumAll = 0;
    let totalCount = 0;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const number = parseInt(numberInput.value);

        if (number === 0) {
            displayResults();
            return;
        }

        if (number > 0) {
            totalCount++;
            sumAll += number;

            if (number % 2 === 0) {
                countPairs++;
                sumPairs += number;
            } else {
                countOdds++;
            }
        }
        
        numberInput.value = '';
    });

    function displayResults() {
        const averagePairs = countPairs > 0 ? sumPairs / countPairs : 0;
        const averageGeneral = totalCount > 0 ? sumAll / totalCount : 0;

        document.getElementById('result-quantity-pairs').textContent = `Quantidade de números pares: ${countPairs}`;
        document.getElementById('result-quantity-odds').textContent = `Quantidade de números ímpares: ${countOdds}`;
        document.getElementById('result-average-pairs').textContent = `Média dos números pares: ${averagePairs.toFixed(2)}`;
        document.getElementById('result-average-general').textContent = `Média geral dos números: ${averageGeneral.toFixed(2)}`;
    }
});
//questao 06
function gerarImpares() {
    const lista = document.getElementById('impares-lista');
    
    lista.innerHTML = '';

    for (let i = 101; i < 200; i += 2) {
        const item = document.createElement('li');
        item.textContent = i;
        lista.appendChild(item);
    }
}

window.onload = gerarImpares;

//questão 07
function calcularTabuada() {

    const numInput = document.getElementById('numInput').value;
    const numero = parseInt(numInput);

    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert('Por favor, insira um número entre 1 e 10.');
        return;
    }

    let resultadoHTML = '<h2>Tabuada de ' + numero + '</h2>';
    for (let i = 0; i <= 10; i++) {
        resultadoHTML += i + ' x ' + numero + ' = ' + (i * numero) + '<br>';
    }

    document.getElementById('resultado').innerHTML = resultadoHTML;
}

// questão 08

function gerarPA() {
    const valorInicial = parseFloat(document.getElementById('valor-inicial').value);
    const razao = parseFloat(document.getElementById('razao').value);
    
    if (isNaN(valorInicial) || isNaN(razao)) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    
    const n = 10; 
    let resultado = [];
    
    for (let i = 0; i < n; i++) {
        let termo = valorInicial + i * razao;
        resultado.push(termo);
    }
    
    document.getElementById('resultado').innerText = resultado.join(', ');
}

//questão 09
function gerarPG() {
    const valorInicial = parseFloat(document.getElementById('valor-inicial').value);
    const razao = parseFloat(document.getElementById('razão').value);
    
    if (isNaN(valorInicial) || isNaN(razao)) {
        alert("Por favor, insira valores válidos para o valor inicial e a razão.");
        return;
    }
    
    // Gerando a sequência em P.G.
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<h2>Sequência em Progressão Geométrica:</h2>";
    let valorAtual = valorInicial;
    
    for (let i = 0; i < 10; i++) {
        resultadoDiv.innerHTML += `<p>Termo ${i + 1}: ${valorAtual.toFixed(2)}</p>`;
        valorAtual *= razao;
    }
}
// questão 10
function gerarSequencia() {
    const valorInicial = parseFloat(document.getElementById('valor-inicial').value);
    
    if (isNaN(valorInicial)) {
        alert("Por favor, insira um valor válido para o valor inicial.");
        return;
    }
    
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<h2>Sequência de Valores:</h2>";
    
    for (let n = 1; n <= 10; n++) {
        const resultado = valorInicial * n;
        resultadoDiv.innerHTML += `<p>Termo ${n}: ${resultado.toFixed(2)}</p>`;
    }
}

