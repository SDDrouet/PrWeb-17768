<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>REGISTRAR DEVOLUCIÓN</title>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $cliente = isset($_POST['cliente']) ? $_POST['cliente'] : '';
        $fechaDevolucion = isset($_POST['fechaDevolucion']) ? $_POST['fechaDevolucion'] : '';

        // Datos de productos devueltos
        $productosD = [];
        for ($i = 1; $i <= 4; $i++) {
            $productoD = isset($_POST["productosD$i"]) ? $_POST["productosD$i"] : '';
            $cantidadD = isset($_POST["cantidadD$i"]) ? $_POST["cantidadD$i"] : 0;

            if (!empty($productoD) && $cantidadD > 0) {
                $productosD[] = array('productoD' => $productoD, 'cantidadD' => $cantidadD);
            }
        }

        $razonDevolucion = isset($_POST['razonDevolucion']) ? $_POST['razonDevolucion'] : '';

        echo "<h2>Resultado del Registro de Devolución</h2>";
        echo "<table border='1'>";

        echo "<tr><td>Fecha de la Devolución:</td><td>$fechaDevolucion</td></tr>";
        echo "<tr><td>Cliente:</td><td>$cliente</td></tr>";

        echo "<tr><td colspan='2'><strong>Productos Devueltos</strong></td></tr>";
        foreach ($productosD as $productoD) {
            echo "<tr><td>Producto: {$productoD['productoD']}</td><td>Cantidad: {$productoD['cantidadD']}</td></tr>";
        }

        echo "<tr><td colspan='2'><strong>Razón de Devolución</strong></td></tr>";
        echo "<tr><td colspan='2'>$razonDevolucion</td></tr>";

        echo "</table>";
    }
    ?>
</body>

</html>
