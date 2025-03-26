function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < 6; i++) {
        let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        soma += nota;
    }
    let media = soma / 6;
    console.log("Média:", media);
    if (media >= 8) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}


calcularMedia();