<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>RECEPCIÓN DE MATERIA PRIMA</title>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombreMateriaPrima = isset($_POST['nombreMateriaPrima']) ? $_POST['nombreMateriaPrima'] : '';
        $proveedorMateriaPrima = isset($_POST['proveedorMateriaPrima']) ? $_POST['proveedorMateriaPrima'] : '';
        $cantidadRecibida = isset($_POST['cantidadRecibida']) ? $_POST['cantidadRecibida'] : 0;
        $unidadMedida = isset($_POST['unidadMedida']) ? $_POST['unidadMedida'] : '';
        $fechaRecepcion = isset($_POST['fechaRecepcion']) ? $_POST['fechaRecepcion'] : '';
        $notas = isset($_POST['notas']) ? $_POST['notas'] : '';

        echo "<h2>Resultado de la Recepción de Materia Prima</h2>";
        echo "<table border='1'>";

        echo "<tr><td>Nombre de la Materia Prima:</td><td>$nombreMateriaPrima</td></tr>";
        echo "<tr><td>Proveedor de la Materia Prima:</td><td>$proveedorMateriaPrima</td></tr>";
        echo "<tr><td>Cantidad Recibida:</td><td>$cantidadRecibida $unidadMedida</td></tr>";
        echo "<tr><td>Fecha de Recepción:</td><td>$fechaRecepcion</td></tr>";
        echo "<tr><td>Notas Adicionales:</td><td>$notas</td></tr>";

        echo "</table>";
    }
    ?>
</body>

</html>
