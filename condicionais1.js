function questao1() {
    let A = parseFloat(prompt("Digite o valor de A: ").replace(",", "."));
    let B = parseFloat(prompt("Digite o valor de B: ").replace(",", "."));
    let C = parseFloat(prompt("Digite o valor de C: ").replace(",", "."));

    if (A + B < C) {
        resultado = ("A soma de A + B é menor que C");
        document.getElementById("resultado1").innerHTML = resultado;
    } else {
        resultado = ("A soma de A + B é maior que C");
        document.getElementById("resultado1").innerHTML = resultado;
    }
}
function questão2() {
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const estadoCivil = document.getElementById('estadoCivil').value;
    const tempoCasadaDiv = document.getElementById('tempoCasada');
    const resultadoDiv = document.getElementById('resultado');

    if (sexo === 'F' && estadoCivil === 'CASADA') {
        tempoCasadaDiv.style.display = 'block';
    } else {
        tempoCasadaDiv.style.display = 'none';
    }

    const tempo = tempoCasadaDiv.style.display === 'block' 
        ? document.getElementById('tempo').value 
        : 'Não aplicável';

    resultadoDiv.innerHTML = `
        <h2>Dados Informados:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Sexo:</strong> ${sexo === 'F' ? 'Feminino' : 'Masculino'}</p>
        <p><strong>Estado Civil:</strong> ${estadoCivil}</p>
        <p><strong>Tempo de Casada:</strong> ${tempo}</p>
    `;
}
function questão3() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    if (isNaN(numberInput) || numberInput === '') {
        resultDiv.textContent = 'Por favor, insira um número válido.';
        return;
    }
    const number = parseInt(numberInput, 10);
    if (number % 2 === 0) {
        resultDiv.textContent = `O número ${number} é par.`;
    } else {
        resultDiv.textContent = `O número ${number} é ímpar.`;
    }
}
function questão4() {
    let c = newFunction();
    document.getElementById('resultado').textContent = `Resultado: ${c}`;

    function newFunction() {
        const a = parseInt(document.getElementById('a').value);
        const b = parseInt(document.getElementById('b').value);

        let c;
        if (a === b) {
            c = a + b;
        } else {
            c = a * b;
        }
        return c;
    }
}
function questao5() {

    const input = document.getElementById('inputNumber').value;
    const number = parseFloat(input);

    if (isNaN(number)) {
        document.getElementById('result').textContent = 'Por favor, insira um número válido.';
        return;
    }
    let result;
    if (number > 0) {
        result = number * 2; 
    } else {
        result = number * 3; 
    }
    
    document.getElementById('result').textContent = `Resultado: ${result}`;
}
function questao6() {
    const value1 = document.getElementById('value1').value.toLowerCase();
    const value2 = document.getElementById('value2').value.toLowerCase();
    const bool1 = value1 === 'true';
    const bool2 = value2 === 'true';

    let resultMessage;
    if (bool1 === bool2) {
        resultMessage = `Ambos são ${bool1 ? 'VERDADEIROS' : 'FALSOS'}.`;
    } else {
        resultMessage = 'Os valores são diferentes.';
    }
    document.getElementById('result').textContent = resultMessage;
}

function questao7() {
    const numero = parseInt(document.getElementById('numero').value, 10);

    let resultado;
    if (numero % 2 === 0) {
        resultado = numero + 5;
    } else {
        resultado = numero + 8;
    }
    document.getElementById('resultado').textContent = 'O resultado da operação é: ' + resultado;
}

function ordenarValores() {
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let valor3 = parseInt(document.getElementById('valor3').value);

    if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        document.getElementById('resultado').innerText = "Os valores devem ser diferentes!";
        return;
    }

    let valores = [valor1, valor2, valor3];
    valores.sort((a, b) => b - a); 
    
    document.getElementById("resultado").innerText = `${valores[0]}, ${valores[1]}, ${valores[2]}`;
}