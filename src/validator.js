const validator = {
  isValid: (inputNumero) => {
    /*se define numSum que es la suma de los números de la tarjeta de crédito, y se define value como el valor 
    de cada posición del string */
    let numSum = 0;
    let value;
    /* acá se cambia el valor de los values pares y se suman los dígitos si la suma es mayor o igual a 10 */
  // Revisando inputNumero
    console.log("rv ",inputNumero)
    for (let i = 0; i < inputNumero.length; ++i) {
          if (i % 2 == 0) {
              value = 2*inputNumero[i];
              if (value >= 10) {
                value = (Math.round(value / 10) + (value % 10));  
              }
          } 
          else {
              value =+inputNumero[i];
          }
          console.log("value", value)
          numSum += value;
    }
        console.log("rv2",numSum)
    /* si el módulo de la suma dividido en 10 es 0 entonces la tarjeta es válida */      
    if (numSum%10==0) {
          return true;
        }
        else {
          return false;
        }

  },

  maskify: (inputNumero) => {
    /* acá el array se divide en dos: primero se divide todo menos los últimos 4 números para enmascarar */
    let maskedCc = inputNumero.slice(0, inputNumero.length-4);
    let arrayMasked = [];
    console.log(inputNumero.slice(-4));
    let lastFour = inputNumero.slice(-4);
    
    if (inputNumero.length <= 4){
      return lastFour;
    }
    /* .push agrega por cada número a enmascarar un # al array vacío arrayMasked */  
    for (let i = 0; i < maskedCc.length; i++){
      arrayMasked.push('#');
    }
    
    let joinMasked = arrayMasked.join('');
    
    return joinMasked + lastFour;
    }
}

export default validator;
