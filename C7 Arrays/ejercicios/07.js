function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var arrayDeStings = true;
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] !== "string"){
      arrayDeStings = false;
    }
  }
  if (arrayDeStings){
    array.sort();
  } else {
    array.sort((a, b) => a - b);
  }
  return array;
}

module.exports = ordenarArray;
