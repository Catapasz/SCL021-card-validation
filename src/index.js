import validator from './validator.js';
console.log(validator);

// Input número de tarjeta
document.querySelector("#inputNumero").addEventListener('keyup', (e)  => {
	let valorInput = e.target.value
  document.querySelector("#inputNumero").value = valorInput
	// Se dejan de permitir espacios en blancos
  .replace(/\s/g, '')
	// Permitimos que se escriban sólo carácteres numéricos
  .replace(/\D/g, '')
})


/* declaramos variable para el botón Validar */
let validateCard  = document.querySelector("#btnValidar");
validateCard.addEventListener("click", btnValid);

/*creamos función para traer string del número de tarjeta y transformarlo en array con un .split y simultáneamente 
convertirlo en valor númerico con un .map */
function btnValid() {
    let ccNumber = document.querySelector("#inputNumero").value;
    console.log(typeof(ccNumber))
    let creditCardNumber = ccNumber.split("").map(Number);
    console.log(creditCardNumber)

  /* a través de una condicional aplicamos función validator a nuestra variable creditCardNumber y en simultáneo
  llamamos a la función Maskify para retornar string enmascarado */

    if (validator.isValid(creditCardNumber)==true) {
        document.querySelector('#validacion').innerHTML = 'Tu tarjeta es válida';
        document.querySelector('#inputNumero').value = validator.maskify(creditCardNumber); 
        alert (" Tarjeta Valida") 
    } 
        else {
        document.querySelector('#validacion').innerHTML = 'Tu tarjeta es inválida, vuelve a intentarlo';
        document.querySelector('#inputNumero').value = validator.maskify(creditCardNumber);
        alert (" Tarjeta Invalida, vuelve a intentarlo") 
      }
}

