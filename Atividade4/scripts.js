document.querySelector('.toggle-nav').addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('show-nav');
});

document.querySelector('.close-tab').addEventListener('click', function() {
    document.querySelector('.side-nav').classList.remove('show-nav');
});

function updateDate() {
    const currentDate = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('pt-BR', options);
    document.getElementById('current-date').textContent = formattedDate;
}
setInterval(updateDate, 1000);