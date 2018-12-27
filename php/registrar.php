<?php 
include("cn.php");
// Recibir los datos  y almacenar en variables
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$correo = $_POST["correo"];
$usuario = $_POST["usuario"];	
$clave = $_POST["clave"];
$telefono = $_POST["telefono"];

// Consulta para insertar
$insertar  = "INSERT INTO usuarios (nombre, apellido, correo, usuario, clave, telefono) VALUES ('$nombre', '$apellido', '$correo', '$usuario', '$clave', '$telefono')";
// Ejecutar consulta

$resultado = mysqli_query($conexion, $insertar);
if(!$resultado){
	echo 'Error al registrarse' . $insertar;
}else{
	echo 'Usuario registrado';
}
// cerrar conexion.
mysqli_close($conexion);
 ?>