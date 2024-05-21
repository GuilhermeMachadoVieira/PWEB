function abrirCurso(curso) {

    const cursosInfo = {

        "ADS": "Análise e Desenvolvimento de Sistemas: Curso de desenvolvimento de software e análise de sistemas.",

        "Eletronica Automotiva": "Eletrônica Automotiva: Curso da área automotiva, com foco em eletrônica.",

        "Logística": "Logística: Esse curso baseia-se na administração e o gerenciamento de recursos e processos logísticos.",

        "Gestão Empresarial": "Gestão Empresarial: Curso que diz respeito a gestão em empresas e elabora e implementa planos de negócios.",

        "Gestão de Qualidade": "Gestão de Qualidade: Curso que busca ensinar como ter a garantia da qualidade nas operações.",

        "Manufatura Avançada": "Manufatura Avançada: Curso que visa projetar e desenvolver projetos de manufatura e tratar de Indústria 4.0.",

        "Polímeros": "Polímeros: Curso que trabalha na fabricação dos Polímeros, compostos químicos utilizados na fabricação de produtos como o plástico."

    };

    const largura = 600;

    const altura = 300;

    const left = (screen.width / 2) - (largura / 2);

    const top = (screen.height / 2) - (altura / 2);

    const novaJanela = window.open("", "_blank", `width=${largura},height=${altura},top=${top},left=${left}`);

    novaJanela.document.write(`

        <html>

            <head>

                <title>Informações do Curso</title>

            </head>

            <body>

                <h1>${curso}</h1>

                <p>${cursosInfo[curso]}</p>

            </body>

        </html>

    `);

}

function confirmarAbertura(curso) {

    const confirmacao = confirm(`Você quer abrir as informações sobre o curso ${curso}?`);

    if (confirmacao) {

        abrirCurso(curso);

    }

}

function selecionarCurso() {

    const cursoSelecionado = document.getElementById("cursos").value;

    if (cursoSelecionado !== "") {

        confirmarAbertura(cursoSelecionado);

    }

}