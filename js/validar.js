function validar(){
	var nombre, apellido, correo, usuario, clave, telefono, expresion;
	nombre = document.getElementById("nombre").value;
	apellido = document.getElementById("apellido").value;
	correo = document.getElementById("correo").value;
	usuario = document.getElementById("usuario").value;
	clave = document.getElementById("clave").value;
	telefono = document.getElementById("telefono").value;
	expresion = /\w+@\w+\.+[a-z]/;

	if(nombre==="" || apellido==="" || correo==="" || usuario==="" || clave==="" || telefono===""){
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
		alert("el correo es muy largo");
		return false;	
	}
	else if(!expresion.test(correo)){
		alert("El correo no es valido");
		return false;
	}

	else if(usuario.length>20 || clave.lengtht>20){
		alert("El usuario y la clave solo deben tener  20 caracteres como maximo");
		return false;
	}else if(isNaN(telefono.length>10)){
		alert("El telefono ingresado no es un numero");
		return false;
	}

}
