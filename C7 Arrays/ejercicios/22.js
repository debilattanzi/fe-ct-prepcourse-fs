function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var num = [];
  var i = 0;
  while (i <= 10){
    num.push(6*i);
    i++;
  }
  return num;
}

module.exports = tablaDelSeis;
