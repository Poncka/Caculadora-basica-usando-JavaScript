document.addEventListener("DOMContentLoaded", function() {
    const numeros = document.querySelectorAll(".num");
    const operadores = document.querySelectorAll("#suma, #resta, #multiplicacion, #division");
    const operacionesP = document.getElementById("operaciones");

    let operacionActual = '';

    numeros.forEach(num => {
        num.addEventListener("click", function() {
            operacionActual += num.value;
            operacionesP.textContent = operacionActual;
        });
    });


    operadores.forEach(operador => {
        operador.addEventListener("click", function() {
            operacionActual += ' ' + operador.value + ' ';
            operacionesP.textContent = operacionActual;
        });
    });

    const calcular = document.getElementById("Calcular");
    calcular.addEventListener("click", function() {
        
        try {
            const resultado = eval(operacionActual);
            operacionesP.textContent = resultado;
            operacionActual = resultado.toString();
        } catch (error) {
            operacionesP.textContent = 'Error';
        }
    });
});
