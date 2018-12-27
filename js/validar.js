function validar(){
	var nombre, apellido, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	telefono = document.getElementById("telefono").value;
	expresion = /\w+@\w+\.+[a-z]/;

	if(nombre ==="" || apellido ==="" || correo ==="" || usuario ==="" || clave ==="" || telefono ===""){
		alert("Todos los campos son obligatorios");
		return false;	
	}
	else if(nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if(apellido.length>80){
		alert("El apellido es muy largo");
		return false;
	}
	else if(correo.length>100){
		alert("El Correo es muy largo");
		return false;
	}
	else if(!expresion.test(correo)){
		alert("El Correo no es válido");
		return false;

	}
	else if(usuario.length>20  || clave.length>20){
		alert("El Usuario y la Clave sólo deben tener 20 caracteres como máximo!!");
		return false;
	}
	else if(telefono.length>10){
		alert("El telefono es muy largo");
		return false;
	}
	else if(isNaN(telefono)){
		alert("El telefono inngresado no es un número");
		return false;
	}
}
