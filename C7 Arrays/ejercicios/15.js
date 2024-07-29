function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indiceNumMasGrande = array[0];

  if (array.length === 0) {
    return 0
  }

  for (let i = 0; i < array.length; i++) {
    if (indiceNumMasGrande < array[i]) {
      indiceNumMasGrande = array[i];
    }
  }

  return array.lastIndexOf(indiceNumMasGrande);
}


module.exports = encontrarIndiceMayor;
