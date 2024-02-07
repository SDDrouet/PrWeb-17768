var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var chart1 = null;
    var chart2 = null;
    var currentIndex = 0;

    // Datos de ejemplo para ingresos y egresos
    var ingresos = [1000, 1200, 800, 1500, 2000];
    var egresos = [500, 600, 400, 800, 1000];
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

    // Datos de ejemplo para proyecciones
    var proyecciones = [500, 1500, 800, 20, 2200];
    var meses_proyecciones = ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];
// Función para actualizar la tabla con nuevos datos
function updateTable(labels, data1, data2, isProyecciones) {
  var tableHeader = document.querySelector('.table thead tr');
  var tableBody = document.querySelector('.table tbody');
  tableBody.innerHTML = '';

  if (isProyecciones) {
    tableHeader.innerHTML = '<th>Mes</th><th>Proyecciones</th>';
    for (var i = 0; i < labels.length; i++) {
      var row = '<tr><td>' + labels[i] + '</td><td>' + data1[i] + '</td></tr>';
      tableBody.innerHTML += row;
    }
  } else {
    tableHeader.innerHTML = '<th>Mes</th><th>Ingresos</th><th>Egresos</th>';
    for (var i = 0; i < labels.length; i++) {
      var row = '<tr><td>' + labels[i] + '</td><td>' + data1[i] + '</td><td>' + (data2[i] || '') + '</td></tr>';
      tableBody.innerHTML += row;
    }
  }
}

    // Función para inicializar el gráfico de ingresos y egresos
function initIngresosEgresosChart() {
  chart1 = new Chart(ctx, {
    type: 'line',
    data: {
      labels: meses,
      datasets: [{
        label: 'Ingresos',
        data: ingresos,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false
      }, {
        label: 'Egresos',
        data: egresos,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Gráfico de Ingresos y Egresos'
        }
      }
    }
  });
	updateTable(meses, ingresos, egresos, false);

}

// Función para inicializar el gráfico de proyecciones
function initProyeccionesChart() {
  chart2 = new Chart(ctx, {
    type: 'line',
    data: {
      labels: meses_proyecciones,
      datasets: [{
        label: 'Proyecciones',
        data: proyecciones,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Gráfico de Proyecciones'
        }
      }
    }
  });
	updateTable(meses_proyecciones, proyecciones, [], true);
}


    // Funciones para cambiar el gráfico mostrado
    function prevChart() {
      showChart(currentIndex - 1);
    }

    function nextChart() {
      showChart(currentIndex + 1);
    }

    function showChart(index) {
      if (index < 0 || index >= 2) {
        return;
      }
      currentIndex = index;
      if (index === 0) {
        if (chart2) {
          chart2.destroy();
        }
        initIngresosEgresosChart();
      } else {
        if (chart1) {
          chart1.destroy();
        }
        initProyeccionesChart();
      }
    }

    // Inicializar los gráficos al cargar la página
    initIngresosEgresosChart();