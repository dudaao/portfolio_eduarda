const ctx = document.getElementById('myPolarAreaChart').getContext('2d');
const data = {
    labels: ['HTML & CSS', 'Flutter', 'React', 'Python', 'TypeScript', 'JavaScript', 'MySql'], // Habilidades
    datasets: [{
        label: 'Habilidades (%)',
        data: [80, 50, 70, 90, 60, 65, 70], // Valores percentuais
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(99, 255, 132, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(99, 255, 132, 1)'
        ],
        borderWidth: 1,
    }]
};

const config = {
    type: 'polarArea', // Tipo do gráfico
    data: data,
    options: {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    display: false // Exibir os ticks
                }
            }
        }
    }
};

const myPolarAreaChart = new Chart(ctx, config);

    function modoEscuro(){
        const svgdarkmode = document.getElementById("svg-modoescuro");
        document.body.classList.toggle('modoEscuro');
        const imgEu = document.getElementById('img-eu');
        if(imgEu){
            if(document.body.classList.contains('modoEscuro')){
                imgEu.src = 'fotos/foto_eduarda2.JPG';
            } else {
                imgEu.src = 'fotos/foto_eduarda.JPG';
            }
        }
    }

