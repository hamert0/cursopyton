function contarDigitos() {
    let numero = prompt("Digite um número:");
    if (/^\d+$/.test(numero)) {
        console.log("Número de dígitos:", numero.length);
    } else {
        console.log("Entrada inválida.");
    }
}


contarDigitos();