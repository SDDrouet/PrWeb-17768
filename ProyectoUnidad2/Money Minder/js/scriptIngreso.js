document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form1");
    var numberInput = document.getElementById("number");
    var categoriaSelect = document.getElementById("select");
    var categoriaOtroInput = document.getElementById("categoriaOtro");
    var metodoPagoSelect = document.getElementById("select2");
    var metodoPagoOtroInput = document.getElementById("metodoPagoOtro");
    var responsaInput = document.getElementById("responsa");
    var dateTimeInput = document.getElementById("datetime-local");
    var observacionTextarea = document.getElementById("textarea");
    var guardarButton = document.getElementById("button");
    var restablecerButton = document.getElementById("button2");

    function mostrarMensajeError(elemento, mensaje) {
        var spanError = document.createElement("span");
        spanError.style.color = "red";
        spanError.style.fontWeight = "bold";
        spanError.textContent = mensaje;
        elemento.parentNode.insertBefore(spanError, elemento.nextSibling);
    }

    function quitarMensajeError(elemento) {
        if (elemento.nextSibling && elemento.nextSibling.tagName === "SPAN") {
            elemento.parentNode.removeChild(elemento.nextSibling);
        }
    }

    function validarFormulario() {
        var valido = true;

        if (numberInput.value === "") {
            mostrarMensajeError(numberInput, "Por favor, ingrese un monto");
            valido = false;
        } else {
            quitarMensajeError(numberInput);
        }

        if (categoriaSelect.value === "") {
            mostrarMensajeError(categoriaSelect, "Por favor, seleccione una categoría");
            valido = false;
        } else {
            quitarMensajeError(categoriaSelect);
        }

        if (metodoPagoSelect.value === "") {
            mostrarMensajeError(metodoPagoSelect, "Por favor, seleccione un método de pago");
            valido = false;
        } else {
            quitarMensajeError(metodoPagoSelect);
        }

        if (responsaInput.value === "") {
            mostrarMensajeError(responsaInput, "Por favor, ingrese un responsable");
            valido = false;
        } else {
            quitarMensajeError(responsaInput);
        }

        if (dateTimeInput.value === "") {
            mostrarMensajeError(dateTimeInput, "Por favor, ingrese una fecha y hora");
            valido = false;
        } else {
            quitarMensajeError(dateTimeInput);
        }

        if (observacionTextarea.value === "") {
            mostrarMensajeError(observacionTextarea, "Por favor, ingrese observaciones");
            valido = false;
        } else {
            quitarMensajeError(observacionTextarea);
        }

        return valido;
    }

    function reiniciarFormulario() {
        form.reset();
        var spanErrors = document.querySelectorAll("span");
        spanErrors.forEach(function(span) {
            if (span.parentNode === form) {
                form.removeChild(span);
            }
        });
    }

    guardarButton.addEventListener("click", function() {
        if (validarFormulario()) {
            // Aquí iría el código para guardar los datos del formulario
            alert("¡Datos guardados correctamente!");
            reiniciarFormulario();
        }
    });

    restablecerButton.addEventListener("click", function() {
        reiniciarFormulario();
    });

    categoriaSelect.addEventListener("change", function() {
        if (categoriaSelect.value === "Otros") {
            categoriaOtroInput.style.display = "inline";
        } else {
            categoriaOtroInput.style.display = "none";
        }
    });

    metodoPagoSelect.addEventListener("change", function() {
        if (metodoPagoSelect.value === "Otros") {
            metodoPagoOtroInput.style.display = "inline";
        } else {
            metodoPagoOtroInput.style.display = "none";
        }
    });
});
