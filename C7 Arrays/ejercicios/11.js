function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++){
    nuevoArray[i] = array[i]*2; 
  }

  return nuevoArray;
}

module.exports = duplicarElementos;
