<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>REGISTRAR CLIENTES</title>
</head>

<body style="margin: 0; background-color: aliceblue; font-family: Cambria, 'Hoefler Text', 'Liberation Serif', Times, 'Times New Roman', 'serif'">
	<h2>Resultado del Registro de Cliente</h2>
    <table width="50%" align="center" border="1" style="border-collapse: collapse">
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
        $apellido = isset($_POST['apellido']) ? $_POST['apellido'] : '';
        $cedula = isset($_POST['cedula']) ? $_POST['cedula'] : '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
        $direccion = isset($_POST['direccion']) ? $_POST['direccion'] : '';

        

        echo "<tr><td colspan='2'><strong>Información del Cliente</strong></td></tr>";
        echo "<tr><td width='50%'>Nombre:</td><td>$nombre</td></tr>";
        echo "<tr><td>Apellido:</td><td>$apellido</td></tr>";
        echo "<tr><td>Número de Cédula:</td><td>$cedula</td></tr>";
        echo "<tr><td>Correo Electrónico:</td><td>$email</td></tr>";
        echo "<tr><td>Teléfono:</td><td>$telefono</td></tr>";
        echo "<tr><td>Dirección:</td><td>$direccion</td></tr>";

        
    }
    ?>
	</table>
</body>

</html>
