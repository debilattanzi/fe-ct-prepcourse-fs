function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  var bigArray = str1.length;
  if (bigArray < str2.length)
    bigArray = str2.length;

  if (bigArray < str3.length)
    bigArray = str3.length;

  var newArray = [];
  for (i = 0; i < bigArray; i++) {
    if (str1[i] != undefined)
      newArray.push(str1[i]);
    if (str2[i] != undefined)
      newArray.push(str2[i]);
    if (str3[i] != undefined)
      newArray.push(str3[i]);
  }

  return newArray.join('');
}

module.exports = combine;