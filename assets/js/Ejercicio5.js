/* Las funcion ejercicio5Ejecutar encapsula variables y operaciones que corresponden 
al ejercicio 5 de modo de llamarla al hacer click en un botón en el html
*/
const ejercicio5Ejecutar = () => {
  //Se crea una lista vacia la cual almacenará cada numero
  const numerosIngresados = [];
  //Se crea lista con preposiciones para mostrar en cada prompt
  const preposiciones = ["primer", "segundo", "tercer", "cuarto", "quinto"];
  //Se crea ciclo for de tamaño 5
  for (let i = 0; i < 5; i++) {
    //Se crea ciclo while infinito el cual solo se rompe cuando se ingresa data con valor numerico
    while (true) {
      //Se ingresa data y se realiza su conversion a number
      const dataIngresada = +prompt(`Ingresa un ${preposiciones[i]} numero`);
      if (isNaN(dataIngresada)) {
        //Si la data no posee valor numerico entonces se mustra una alerta
        alert("Has ingresado data que no es número");
      } else {
        //Si la data posee valor numerico entonces se almacena dicho valor en la lista numerosIngresados y se sale del ciclo
        numerosIngresados[i] = dataIngresada;
        break;
      }
    }
  }

  /*
Cuando se establecen los 5 valores se muestra una alerta mostrando cada uno de los 5
valores, la suma de todos los valores usando reduce y el promedio de los cinco valores
  */
  alert(`
Los 5  numeros ingresados son: ${numerosIngresados[0]},${
    numerosIngresados[1]
  },${numerosIngresados[2]},${numerosIngresados[3]},${
    numerosIngresados[4]
  }. La suma de los 5 numeros es: ${numerosIngresados.reduce(
    (acc, elem) => acc + elem,
    0
  )} y el promedio de los 5 números ingresados es: ${
    numerosIngresados.reduce((acc, elem) => acc + elem, 0) /
    numerosIngresados.length
  }
`);
};
