function calcularArea() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (!isNaN(base) && !isNaN(altura)) {
        let area = base * altura;
        document.getElementById('area-resultado').innerText = `Área do retângulo: ${area}`;
    } else {
        document.getElementById('area-resultado').innerText = 'Por favor, insira valores válidos para base e altura.';
    }
}