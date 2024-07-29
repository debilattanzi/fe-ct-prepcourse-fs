function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var resultado = 0
  var promedio = 0
  for (let i = 0; i < resultadosTest.length; i++) {
    resultado += resultadosTest[i];
    promedio = resultado / resultadosTest.length
  }

  return promedio
}

module.exports = promedioResultadosTest;
