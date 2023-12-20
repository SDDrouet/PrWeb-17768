<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>REGISTRAR VENTAS</title>
</head>

<body>
	<h2>Resultado del Registro de Venta</h2>
	<table width="50%" align="center" border="1" style="border-collapse: collapse">
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $numeroVenta = isset($_POST['numeroVenta']) ? $_POST['numeroVenta'] : '';
        $cliente = isset($_POST['cliente']) ? $_POST['cliente'] : '';
        $consumidorFinal = isset($_POST['consumidorFinal']) ? 'Sí' : 'No'; // Checkbox
        $fechaVenta = isset($_POST['fechaVenta']) ? $_POST['fechaVenta'] : '';
        $metodoPago = isset($_POST['metodoPago']) ? $_POST['metodoPago'] : '';

        // Datos de productos
        $productos = [];
        for ($i = 1; $i <= 4; $i++) {
            $producto = isset($_POST["productos$i"]) ? $_POST["productos$i"] : '';
            $cantidad = isset($_POST["cantidad$i"]) ? $_POST["cantidad$i"] : 0;

            if (!empty($producto) && $cantidad > 0) {
                $productos[] = array('producto' => $producto, 'cantidad' => $cantidad);
            }
        }

        echo "<tr><td colspan='2'><strong>Información de la Venta</strong></td></tr>";
        echo "<tr><td width='50%'>Número de Venta:</td><td>$numeroVenta</td></tr>";
        echo "<tr><td>Cliente:</td><td>$cliente</td></tr>";
        echo "<tr><td>Consumidor Final:</td><td>$consumidorFinal</td></tr>";
        echo "<tr><td>Fecha de la Venta:</td><td>$fechaVenta</td></tr>";
        echo "<tr><td>Método de Pago:</td><td>$metodoPago</td></tr>";

        echo "<tr><td colspan='2'><strong>Productos Vendidos</strong></td></tr>";
        foreach ($productos as $producto) {
            echo "<tr><td>{$producto['producto']}</td><td>{$producto['cantidad']}</td></tr>";
        }

    }
    ?>
	</table>
</body>

</html>
