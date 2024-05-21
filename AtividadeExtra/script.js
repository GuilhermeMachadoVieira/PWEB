document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const studentsList = document.getElementById("studentsList");
    const averageDiv = document.getElementById("average");
    const students = [];

    studentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const ra = document.getElementById("ra").value.trim();
        const grade1 = parseFloat(document.getElementById("grade1").value);
        const grade2 = parseFloat(document.getElementById("grade2").value);
        const grade3 = parseFloat(document.getElementById("grade3").value);

        // Validate input
        if (!validateName(name)) {
            alert("Nome Completo deve conter pelo menos um nome e um sobrenome.");
            return;
        }
        if (!validateRA(ra)) {
            alert("RA deve ter exatamente 5 dígitos.");
            return;
        }
        if (!validateGrade(grade1) || !validateGrade(grade2) || !validateGrade(grade3)) {
            alert("As notas devem estar entre 0 e 10.");
            return;
        }

        const average = (grade1 + grade2 + grade3) / 3;
        students.push({ name, ra, average });

        displayStudents();

        if (students.length === 10) {
            displayOverallAverage();
        }

        studentForm.reset();
    });

    function validateName(name) {
        return name.split(' ').length > 1;
    }

    function validateRA(ra) {
        return /^[0-9]{5}$/.test(ra);
    }

    function validateGrade(grade) {
        return grade >= 0 && grade <= 10;
    }

    function displayStudents() {
        studentsList.innerHTML = students.map(student => 
            `<p>Nome: ${student.name}, RA: ${student.ra}, Média: ${student.average.toFixed(2)}</p>`
        ).join('');
    }

    function displayOverallAverage() {
        const overallAverage = students.reduce((sum, student) => sum + student.average, 0) / students.length;
        averageDiv.innerHTML = `Média Geral: ${overallAverage.toFixed(2)}`;
    }
});