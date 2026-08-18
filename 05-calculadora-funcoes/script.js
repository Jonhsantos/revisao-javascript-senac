/*
EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
	// TODO
	return a + b;
}

function subtrair(a, b) {
	// TODO
	return a - b;
}

function multiplicar(a, b) {
	// TODO
	return a * b;
}

function dividir(a, b) {
	// TODO:
	// Trate divisão por zero.
	if(a === 0 || b === 0){
		return "Não é possível divisão por Zero"
	} else{
		return a / b
	}
}

function calcular(a, b, operacao) {
	// TODO:
	// Escolha a função correta conforme a operação.
	// Trate também uma operação desconhecida.
	if(operacao === "somar"){
		console.log(somar(a, b))
	} else if( operacao === "subitrair"){
		console.log(subtrair(a, b))
	} else if (operacao === "multiplicar"){
		console.log(multiplicar(a, b))
	} else if (operacao === "dividir"){
		console.log(dividir(a, b))
	}else{
		console.log("Função desconhecida")
	}

	// pode ser feito no swtich case 

	switch(operacao){
		case "somar":
			return somar(a, b)
		case "subitrair":
			return subtrair(a, b)
		case "multiplicar":
			return multiplicar(a, b)
		case "dividir":
			return dividir(a, b)
		default:
			return "Função desconhecida"
	}
}

// TODO:
// Faça alguns testes com calcular().
calcular(10, 5, "somar");
calcular(10, 5, "subitrair");
calcular(10, 5, "multiplicar");
calcular(10, 5, "juntar");
calcular(10, 0, "dividir");
