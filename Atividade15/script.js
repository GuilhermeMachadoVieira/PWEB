function validar() {
    const form = document.formpesquisa;
    const nome = form.elements["nome"].value;
    const email = form.elements["email"].value;
    const comentario = form.elements["comentario"].value;
    const pesquisa = form.elements["pesquisa"].value;

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    if (pesquisa === "") {
        alert("Por favor, selecione uma opção de pesquisa.");
        return false;
    } else {
        if (pesquisa === "sim") {
            alert("Volte sempre à esta página!");
        } else {
            alert("Que bom que você voltou a visitar esta página!");
        }
    }

    return true;
}
