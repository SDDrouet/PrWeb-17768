<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>REGISTRAR PRODUCTO</title>
</head>

<body>
	<h2>Resultado del Registro de Producto</h2>
	<table width="50%" align="center" border="1" style="border-collapse: collapse">
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombreProducto = isset($_POST['nombreProducto']) ? $_POST['nombreProducto'] : '';
        $codigoProducto = isset($_POST['codigoProducto']) ? $_POST['codigoProducto'] : '';
        $categoriaProducto = isset($_POST['categoriaProducto']) ? $_POST['categoriaProducto'] : '';
        $precioUnitario = isset($_POST['precioUnitario']) ? $_POST['precioUnitario'] : 0;
        $cantidadStock = isset($_POST['cantidadStock']) ? $_POST['cantidadStock'] : 0;
        $descripcionProducto = isset($_POST['descripcionProducto']) ? $_POST['descripcionProducto'] : '';

        echo "<tr><td width='50%'>Nombre del Producto:</td><td>$nombreProducto</td></tr>";
        echo "<tr><td>Código de Producto:</td><td>$codigoProducto</td></tr>";
        echo "<tr><td>Categoría del Producto:</td><td>$categoriaProducto</td></tr>";
        echo "<tr><td>Precio Unitario ($):</td><td>$precioUnitario</td></tr>";
        echo "<tr><td>Cantidad en Stock:</td><td>$cantidadStock</td></tr>";
        echo "<tr><td>Descripción del Producto:</td><td>$descripcionProducto</td></tr>";

    }
    ?>
	</table>
</body>

</html>
