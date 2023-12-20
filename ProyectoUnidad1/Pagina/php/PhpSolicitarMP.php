<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>SOLICITAR MATERIA PRIMA</title>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombreMateriaPrima = isset($_POST['nombreMateriaPrima']) ? $_POST['nombreMateriaPrima'] : '';
        $proveedorMateriaPrima = isset($_POST['proveedorMateriaPrima']) ? $_POST['proveedorMateriaPrima'] : '';
        $cantidadRequerida = isset($_POST['cantidadRequerida']) ? $_POST['cantidadRequerida'] : 0;
        $unidadMedida = isset($_POST['unidadMedida']) ? $_POST['unidadMedida'] : '';
        $fechaSolicitud = isset($_POST['fechaSolicitud']) ? $_POST['fechaSolicitud'] : '';
        $fechaRequerida = isset($_POST['fechaRequerida']) ? $_POST['fechaRequerida'] : '';
        $notas = isset($_POST['notas']) ? $_POST['notas'] : '';

        echo "<h2>Resultado de la Solicitud de Materia Prima</h2>";
        echo "<table border='1'>";

        echo "<tr><td>Nombre de la Materia Prima:</td><td>$nombreMateriaPrima</td></tr>";
        echo "<tr><td>Proveedor de la Materia Prima:</td><td>$proveedorMateriaPrima</td></tr>";
        echo "<tr><td>Cantidad Requerida:</td><td>$cantidadRequerida $unidadMedida</td></tr>";
        echo "<tr><td>Fecha de Solicitud:</td><td>$fechaSolicitud</td></tr>";
        echo "<tr><td>Fecha Requerida:</td><td>$fechaRequerida</td></tr>";
        echo "<tr><td>Notas Adicionales:</td><td>$notas</td></tr>";

        echo "</table>";
    }
    ?>
</body>

</html>
