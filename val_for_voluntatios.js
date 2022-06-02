(function () {
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('enviar');


    var validarApellido = function (e) {
        if (formulario.apellido.value == 0) {
            alert("Completa con tu Apellido");
            e.preventDefault();
        }

    };

    var validarNombre = function (e) {
        if (formulario.nombre.value == 0) {
            alert("Completa con tu Nombre");
            e.preventDefault();
        }
    };

    var validarNacimiento = function (e) {
        const fecha = new Date();
        const añoActual = parseInt(fecha.getFullYear());
        const añoNacimiento = parseInt(formulario.nacimiento.value);
        let resto = añoActual - añoNacimiento;
        if (resto <= 18) {
            alert("Eres menor de edad - Debes concurrir con autorización de tus padres o tutor");
            e.preventDefault();
        }
    };

    function validar(e) {
        validarApellido(e);
        validarNombre(e);
        validarNacimiento(e);
    };

    formulario.addEventListener("submit", validar);
}())