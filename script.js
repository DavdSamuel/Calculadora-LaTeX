const input = document.querySelector("input");
const resultado = document.getElementById("resultado");
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formula = input.value;
  resultado.innerHTML = `$${formula}$`;

  MathJax.Hub.Typeset();
});
