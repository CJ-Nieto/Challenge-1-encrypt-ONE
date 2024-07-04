function validateInput(input) {
  // Verifica si el texto del botón es solo en minúsculas
  if (input !== input.toLowerCase()) {
    alert('El texto debe estar en minúsculas.');
    return false;
  }

  // Verifica si el texto del botón contiene acentos
  var hasAccent = /[áéíóú]/.test(input);
  if (hasAccent) {
    alert('El texto no debe contener acentos.');
    return false;
  }

  // Verifica si el texto del botón es solo espacios
  if (!input.trim()) {
    alert('El texto no debe ser solo espacios.');
    return false;
  }

  return true;
}

/*  Definición de los mapas de sustitución.
    Esto permitirá asociar cada letra o palabra
    con su equivalente encriptado y viceversa.
*/
const encriptMap = [
  "i",
  "e",
  "a",
  "o",
  "u"
];
const decriptMap = [
  "imes",  // i
  "enter", // e
  "ai",    // a
  "ober",  // o
  "ufat"   // u
];

/*  Encriptación de caracter (encryptChar):
    ° Esta función toma un caracter ("char")
      y dos arreglos ("de" y "a").
    ° "de" representa las letras normales (sin encriptar),
      y "a" representa las letras encriptadas.
    ° La función busca el caracter en el arreglo "de".
      Si lo encuentra, devuelve su equivalente en el arreglo "a".
      Si no lo encuentra, devuelve el mismo caracter sin cambios.
*/
function encryptChar(char, de, a) {
  for (let i = 0; i < de.length; i++) {
    if (char === de[i])
      return a[i];
    }
  return char;
}

/*  Encriptación de texto (encryptText):
    ° Esta función toma una cadena de texto ("text").
    ° Itera sobre cada caracter en la cadena y llama a "encryptChar"
      para encriptar cada caracter individualmente.
    ° Concatena los caracteres encriptados para formar la cadena encriptada completa.
*/
function encryptText(text) {
  let result = "";
  for (const val of text) {
    result += encryptChar(val, encriptMap, decriptMap);
  }
  return result;
}

/*  Desencriptación (decryptEnd):
    ° Esta función toma una cadena de texto encriptada ("text").
    ° Itera sobre los elementos del arreglo "decriptMap".
    ° Reemplaza todas las apariciones de las palabras encriptadas
      por sus equivalentes desencriptadas en la cadena "text".
    ° Devuelve la cadena desencriptada.
*/
function decryptEnd(text) {
  for (let i = 0; i < decriptMap.length; i++) {
    text = text.replaceAll(decriptMap[i], encriptMap[i]);
    }
  return text;
}

function encrypt() {
  // Código de encriptación
  var input = document.getElementById('inputText').value;

  if (!validateInput(input)) {
    return;
  }

  // Llama a la función de encriptación
  var encrypted = encryptText(input);

  document.getElementById('textContainer').innerText = encrypted;

  // Oculta la imagen
  document.getElementById('imageContainer').style.display = 'none';

  // Muestra el botón "Copiar"
  document.getElementById('copyButton').style.display = 'block';
}

function decrypt() {
  // Código de desencriptación
  var input = document.getElementById('inputText').value;

  if (!validateInput(input)) {
    return;
  }
  
  // Llama a la función de desencriptación
  var decrypted = decryptEnd(input);

  document.getElementById('textContainer').innerText = decrypted;

  // Oculta la imagen
  document.getElementById('imageContainer').style.display = 'none';

  // Muestra el botón "Copiar"
  document.getElementById('copyButton').style.display = 'block';
}

function copyText() {
  var result = document.getElementById('textContainer').innerText;
  navigator.clipboard.writeText(result)
    .then(function() {
      alert('Texto copiado al portapapeles');
    })
    .catch(function(error) {
      console.error('Falló copiar el texto: ', error);
    });
}

function reset(){
  location.reload();

  /*  El uso del siguiente código genera que se mueva la imagen dentro
      del contenedor #result, por lo que se optó por recargar/reiniciar la página

  // Limpia el texto de entrada y de salida
  document.getElementById('inputText').value = '';
  document.getElementById('textContainer').innerText = '';

  // Muestra la imagen
  document.getElementById('imageContainer').style.display = 'block';

  // Oculta el botón "Copiar"
  document.getElementById('copyButton').style.display = 'none';
  */
}
