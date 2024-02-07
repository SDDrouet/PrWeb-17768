// script.js

function enviarDatosAlServidor(ruta, datos, nombreArchivo) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', ruta, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                // Manejar la respuesta del servidor (opcional)
            } else {
                console.error('Error en la solicitud AJAX:', xhr.status);
            }
        }
    };

    // Agregar el nombre del archivo como un parámetro adicional
    datos.nombreArchivo = nombreArchivo;

    // Convertir el objeto JavaScript a formato JSON y enviarlo en el cuerpo de la solicitud
    xhr.send(JSON.stringify(datos));
}

// Función para eliminar archivos utilizando AJAX
function eliminarArchivos() {
    // Realizar una solicitud AJAX al servidor
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'eliminar_archivos.php', true);
    xhr.send();

    // Manejar la respuesta (opcional)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
}// JavaScript Document

// Función para cargar archivos CSV
function cargarArchivosCSV(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {
        console.error('Error al cargar el archivo CSV:', xhr.status);
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}

// Función para procesar datos CSV
function procesarDatosCSV(csvData) {
  var lines = csvData.split('\n');
  var labels = [];
  var data = [];

  for (var i = 1; i < lines.length; i++) {
    var parts = lines[i].split(',');
    labels.push(parts[0]);
    data.push(parseFloat(parts[1]));
  }

  return { labels: labels, data: data };
}

// Función para cargar los archivos CSV de ingresos y egresos
function cargarCSVData() {
  var ingresosURL = '../html/ingresos.csv';
  var egresosURL = '../html/egresos.csv';

  // Cargar archivo de ingresos
  cargarArchivosCSV(ingresosURL, function(ingresosCSV) {
    var ingresosData = procesarDatosCSV(ingresosCSV);
    var ingresos = ingresosData.data;
    var meses = ingresosData.labels;

    // Cargar archivo de egresos
    cargarArchivosCSV(egresosURL, function(egresosCSV) {
      var egresosData = procesarDatosCSV(egresosCSV);
      var egresos = egresosData.data;

      // Llamar a la función para manejar los datos
      manejarDatos(ingresos, egresos, meses);
    });
  });
}

// Función para manejar los datos de ingresos y egresos
function manejarDatos(ingresos, egresos, meses) {
  console.log('Ingresos:', ingresos);
  console.log('Egresos:', egresos);
  console.log('Meses:', meses);

  // Aquí puedes realizar cualquier operación adicional con los datos cargados
}

// Llamar a la función para cargar los archivos CSV al cargar la página
cargarCSVData();
