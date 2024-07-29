function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var stringMayuscula = array.map(elemento => elemento.toUpperCase());

  return stringMayuscula;
}

module.exports = convertirStringAMayusculas;
