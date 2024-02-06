<?php

function agregarDatosACSV($rutaArchivo, $nuevosDatos) {
    // Verificar si el archivo existe
    if (file_exists($rutaArchivo)) {
        // Leer contenido actual del archivo CSV
        $handle = fopen($rutaArchivo, 'a'); // Open the CSV file for appending
    } else {
        // Si el archivo no existe, crearlo y agregar los datos del formulario
        $handle = fopen($rutaArchivo, 'w'); // Create a new CSV file
        fputcsv($handle, array_keys($nuevosDatos)); // Write headers
    }

    // Write new data to the CSV file
    fputcsv($handle, $nuevosDatos);

    // Close the CSV file
    fclose($handle);

    echo 'Datos agregados al archivo CSV exitosamente.';
}

// Obtener datos del cuerpo de la solicitud
$data = file_get_contents("php://input");

// Decodificar datos JSON a un array asociativo
$datosFormulario = json_decode($data, true);

// Acceder al nombre del archivo y a la categoría
$nombreArchivo = $datosFormulario['nombreArchivo'];
$categoria = $datosFormulario['categoria'];

// Eliminar las claves 'nombreArchivo' y 'categoria' del array
unset($datosFormulario['nombreArchivo']);
unset($datosFormulario['categoria']);

// Determinar el nombre del archivo CSV basado en la categoría
$nombreArchivoCSV = ($categoria == 'ingresos') ? 'ingresos.csv' : 'egresos.csv';

// Llamada a la función
agregarDatosACSV($nombreArchivoCSV, $datosFormulario);
?>
