(function () {
    var formulario = document.getElementsByName('adopcion')[0],
        elementos = formulario.elements,
        boton = document.getElementById('enviar');


    var validarmail = function (e) {
        if (formulario.email.value == 0) {
            alert("Completa con tu Mail");
            e.preventDefault();
        }

    };


    function validar(e) {
        validarmail(e);
    };

    formulario.addEventListener("submit", validar);
}())