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

function encrypt() {
  // Código de encriptación
  var input = document.getElementById('inputText').value;

  if (!validateInput(input)) {
    return;
  }

  var encrypted = input.replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/a/g, 'ai')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
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
  
  var decrypted = input.replace(/enter/g, 'e')
                       .replace(/imes/g, 'i')
                       .replace(/ai/g, 'a')
                       .replace(/ober/g, 'o')
                       .replace(/ufat/g, 'u');
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
      del contenedor #result, por lo que se optó por recargar la página

  // Limpia el texto de entrada y de salida
  document.getElementById('inputText').value = '';
  document.getElementById('textContainer').innerText = '';

  // Muestra la imagen
  document.getElementById('imageContainer').style.display = 'block';

  // Oculta el botón "Copiar"
  document.getElementById('copyButton').style.display = 'none';
  */
}
