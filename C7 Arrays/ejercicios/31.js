function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
var textoSeparado = texto.split('');

var textoIvertivo = textoSeparado.reverse();

var textoArreglado = textoIvertivo.join('');

return textoArreglado;


}

module.exports = invertirTexto;
