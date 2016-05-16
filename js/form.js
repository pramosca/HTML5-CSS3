var form = document.getElementById("contact-form");
form.addEventListener("submit", function(evt) {
	
	var nombre = document.getElementById("nombreId");
	var email = document.getElementById("emailId");
	var misiones = {
		"mision1": document.getElementById("tipo_mision_1"),
		"mision2": document.getElementById("tipo_mision_2"),
		"mision3": document.getElementById("tipo_mision_3"),
		"mision4": document.getElementById("tipo_mision_4")
	};
	var ejercito = document.getElementById("ejercitoId");
	var fecha = document.getElementById("fechaId");

	// validamos los campos
	if (nombre.checkValidity() == false) {
		alert("El nombre no es válido");
		nombre.focus();
		evt.preventDefault(); // para cancelar el comportamiento por defecto, i.e, que no mande el formulario
		return false;
	}
	if (email.checkValidity() == false) {
		if (email.validity.patterMismatch == true) {
			alert("casi parece un email");
			email.focus();
			evt.preventDefault(); 
			return;
		}
		if (email.validity.typeMismatch == true) {
			alert("introduce un email válido");
			email.focus();
			evt.preventDefault(); 
			return;
		}
		if (email.validity.valueMissing == true) {
			alert("el email es obligatorio");
			email.focus();
			evt.preventDefault(); 
			return;
		}
	}
	if (ejercito.checkValidity() == false) {
		alert("el campo ejército es incorrecto");
		ejercito.focus();
		evt.preventDefault(); 
		return;
	}
	if (fecha.checkValidity() == false) {
		alert("el campo fecha es incorrecto");
		fecha.focus();
		evt.preventDefault(); 
		return;
	}
	// con validar uno de los radios es suficiente, porque se hablan entre ellos
	if (misiones.mision1.checkValidity() == false) {
		alert("selecciona el tipo de misión");
		evt.preventDefault(); 
		return;
	}

});