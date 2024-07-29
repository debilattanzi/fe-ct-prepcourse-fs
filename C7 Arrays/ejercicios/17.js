function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var sumaNum = 0
  for(let i = 0; i < arrayOfNums.length; i++){
    sumaNum += arrayOfNums[i];
  }
return sumaNum;
}

module.exports = agregarNumeros;
