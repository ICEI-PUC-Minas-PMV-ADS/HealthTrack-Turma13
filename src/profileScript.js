function calcularTMB() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const idade = parseInt(document.getElementById("idade").value);

    const tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;

    document.getElementById("resultado-label").textContent = "Resultado: " + tmb.toFixed(2) + " calorias por dia";
}


function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura-imc").value.replace(",", "."));
  const peso = parseFloat(document.getElementById("peso-imc").value.replace(",", "."));
  
    const imc = peso / (altura * altura);
    
    const imcFormatado = imc.toFixed(2).replace(".", ",");
  
    document.getElementById("resultado-imc-label").textContent = "Resultado: " +  imcFormatado;;
  
    let estado = "";
    if (imc < 18.5) {
      estado = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
      estado = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
      estado = "Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9) {
      estado = "Obeso";
    } else {
      estado = "Obeso Grave";
    }
  
    document.getElementById("estado-label").textContent = "Estado: " + estado;
  }
  