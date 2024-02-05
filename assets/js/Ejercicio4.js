/* Las funcion ejercicio4Ejecutar encapsula variables y operaciones que corresponden 
al ejercicio 4 de modo de llamarla al hacer click en un botón en el html
*/
const ejercicio4Ejecutar = () => {
  /*
Declaro la variable cantidadDias en nulo y posteriormente seteo su valor en un ciclo while
*/
  let cantidadDias = null;
  /*
El siguiente ciclo while en cada iteración verifica que la data ingresada tenga
valor númerico,sea mayor que cero y sea entero de modo tal que si lo anterior se cumple, el ciclo
while finaliza y la variable cantidadDias es seteada a el valor ingresado. Si lo anterior
no se cumple el ciclo while continua con la siguiente iteración mostrando.
*/
  while (true) {
    const dataIngresada = +prompt("Ingresa una cantidad de dias");
    if (isNaN(dataIngresada)) {
      //Si la data ingresada no posee valor numerico se muestra la alerta siguiente
      alert(
        "Has ingresado data sin valor númerico. Favor ingresa un valor númerico"
      );
    } else {
      if (dataIngresada < 0) {
        //Si la data ingresada es negativa, entonces se muestra la alerta siguiente
        alert(
          "El numero ingresado es negativo, debes ingresar un numero no negativo"
        );
      } else if (!Number.isInteger(dataIngresada)) {
        //Si la data ingresada no es entera, entonces se muestra la alerta siguiente
        alert("EL numero ingresado no es entero, ingresa un numero entero");
      } else {
        /*Si la data ingresada posee valor numerico, si es mayor que cero y si es entera entonces 
la variable cantidadDias se setea y el ciclo while se finaliza
        */
        cantidadDias = Math.floor(dataIngresada);
        break;
      }
    }
  }

  /*
Cuando se ha ingresado un valor numerico entero mayor que cero,entonces procedo a realizar
las operaciones de seteo de las variables cantidadDiasTotales, year, weeks, days.
  */
  const cantidadDiasTotales = cantidadDias; // Representa los días ingresados por el usuario
  const year = Math.floor(cantidadDias / 365); //Division entera, representa los años
  cantidadDias = cantidadDias % 365; // se actualiza la variable cantidadDias con el residuo de la division normal entre cantidadDias y 365
  const weeks = Math.floor(cantidadDias / 7); // Division entera,representa las semanas
  cantidadDias = cantidadDias % 7; //se actualiza la variable cantidadDias con el residuo de la division normal entre cantidadDias y 7
  const days = cantidadDias; // se setea la variable days a la cantidad de dias residuales la cual es menor que 7

  /*
Se muestra una alerta mostrando la cantidad de dias totales ingresados y su conversion7
a años,semanas y dias
*/
  alert(`
Se ha ingresado la siguiente cantidad de dias ${cantidadDiasTotales} los cuales equivalen
a ${year} año${year > 1 ? "s" : ""}, ${weeks} semana${
    weeks > 1 ? "s" : ""
  } y ${days} dia${days > 1 ? "s" : ""}
`);
};
