var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var chart1 = null;
var chart2 = null;
var currentIndex = 0;

// Arreglos para almacenar los datos de ingresos, egresos y meses
var ingresos = [];
var egresos = [];
var meses = [];

// Función para cargar datos desde el archivo CSV
function cargarDatosDesdeCSV(nombreArchivo, arreglo, tipo) {
    // Crear una nueva instancia de XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Abrir una conexión con el archivo CSV
    xhr.open('GET', nombreArchivo);

    // Configurar la función de callback para cuando se complete la solicitud
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Obtener el contenido del archivo CSV
            var csvData = xhr.responseText;

            // Separar el contenido por filas
            var filas = csvData.split('\n');

            // Iterar sobre cada fila para obtener los datos
            filas.forEach(function(fila) {
                // Separar los valores de la fila por comas
                var valores = fila.split(',');

                // Obtener el valor numérico (si es un número válido)
                var valorNumerico = parseFloat(valores[1]);

                // Agregar el valor a nuestro arreglo
                arreglo.push(valorNumerico);

                // Obtener el mes (primer valor de la fila)
                meses.push(valores[0]);
            });

            // Generar el gráfico una vez que se hayan cargado los datos
            if (tipo === 'ingresos') {
                generarGraficoIngresos();
            } else if (tipo === 'egresos') {
                generarGraficoEgresos();
            }
        } else {
            console.error('Error al cargar el archivo CSV ' + nombreArchivo);
        }
    };

    // Enviar la solicitud
    xhr.send();
}

// Llamar a la función para cargar los datos de ingresos desde el archivo CSV
cargarDatosDesdeCSV('ingresos.csv', ingresos, 'ingresos');
// Llamar a la función para cargar los datos de egresos desde el archivo CSV
cargarDatosDesdeCSV('egresos.csv', egresos, 'egresos');

// Función para generar el gráfico de ingresos
function generarGraficoIngresos() {
    // Eliminar el gráfico anterior (si existe)
    if (chart1 !== null) {
        chart1.destroy();
    }

    // Configurar los datos del gráfico
    var data = {
        labels: meses,
        datasets: [{
            label: 'Ingresos',
            data: ingresos,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    // Configurar las opciones del gráfico
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Crear el gráfico
    chart1 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

// Función para generar el gráfico de egresos
function generarGraficoEgresos() {
    // Eliminar el gráfico anterior (si existe)
    if (chart2 !== null) {
        chart2.destroy();
    }

    // Configurar los datos del gráfico
    var data = {
        labels: meses,
        datasets: [{
            label: 'Egresos',
            data: egresos,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    };

    // Configurar las opciones del gráfico
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Crear el gráfico
    chart2 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

// Llamar a la función para generar el gráfico de ingresos
generarGraficoIngresos();
// Llamar a la función para generar el gráfico de egresos
generarGraficoEgresos();
