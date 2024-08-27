function textoCript(text) {
  let textoCript = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  return textoCript;
}

function decryptText(text) {
  let decryptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  return decryptedText;
}

function copiar(text) {
  navigator.clipboard.writeText(text).then(() => {
      alert("Texto copiado para a área de transferência!");
  }).catch((error) => {
      console.error("Erro ao copiar texto: ", error);
  });
}

document.getElementById("encryptButton").addEventListener("click", function() {
  const inputText = document.getElementById("inputText").value;
  const result = textoCript(inputText);
  document.getElementById("outputText").value = result;
});

document.getElementById("decryptButton").addEventListener("click", function() {
  const inputText = document.getElementById("inputText").value;
  const result = decryptText(inputText);
  document.getElementById("outputText").value = result;
});

document.getElementById("copyButton").addEventListener("click", function() {
  const outputText = document.getElementById("outputText").value;
  copiar(outputText);
});

document.getElementById("inputText").addEventListener("input", function(event) {
  const inputText = event.target.value;
  const validText = inputText.replace(/[^a-z\s]/g, '');
  event.target.value = validText;
});
