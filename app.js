const INPUT = document.getElementById("numero-usuario");
const BOTON = document.getElementById("btn-adivinar");
const MENSAJE = document.getElementById("mensaje");
const CUERPO = document.getElementById("cuerpo");
const VISTA_INTENTOS = document.getElementById("contador-vistas"); // Asegúrate de tener este ID en tu HTML

const numeroSecreto = Math.floor(Math.random() * 500) + 1;
let intentos = 0;

console.log(`Acceso de root: ${numeroSecreto}`);

function comprobar() {
    let intento = parseInt(INPUT.value);
    let distancia = Math.abs(numeroSecreto - intento);

 
    if (isNaN(intento) || intento < 0 || intento > 500) {
        MENSAJE.innerText = `Introduce un número entre 1 y 500`;
    } else {
  
        intentos = intentos + 1;
        VISTA_INTENTOS.innerText = intentos;

        if (intento === numeroSecreto) {
            MENSAJE.innerText = `¡Acertaste, felicidades! Lo lograste en ${intentos} intentos.`;
            CUERPO.style.background = `linear-gradient(to bottom right, #2D1B33, #6f577b, #66576c)`;
            BOTON.style.display = `none`;
        } else {
       

            if (distancia >= 50) {
                
                CUERPO.style.background = `linear-gradient(to bottom right, #d1d1d1, #60a5fa, #1d4ed8)`;
                if (intento > numeroSecreto) {
                    MENSAJE.innerText = `Frío, frío: tu número es mayor que el mío`;
                } else {
                    MENSAJE.innerText = `Frío, frío: tu número es menor que el mío`;
                }
            } else if (distancia >= 15 && distancia < 50) {
             
                CUERPO.style.background = `linear-gradient(to bottom right, #e1dbd6, #fbbf24, #d97706)`;
                if (intento > numeroSecreto) {
                    MENSAJE.innerText = `Tibio, tibio: tu número es mayor que el mío`;
                } else {
                    MENSAJE.innerText = `Tibio, tibio: tu número es menor que el mío`;
                }
            } else if (distancia < 15) {
                
                CUERPO.style.background = `linear-gradient(to bottom right, #e2e2e2, #ef4444, #991b1b)`;
                if (intento > numeroSecreto) {
                    MENSAJE.innerText = `Caliente, caliente: tu número es mayor que el mío`;
                } else {
                    MENSAJE.innerText = `Caliente, caliente: tu número es menor que el mío`;
                }
            }
        }
    }
}
