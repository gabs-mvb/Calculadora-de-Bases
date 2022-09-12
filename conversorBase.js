function validacaoValor() {
  var valorInput = Number(numeroDecimal.value);

  //valida conteudo do input
  if (valorInput > 9999999) {
    btnSubmit.style.display = "none";
  } if (valorInput < 9999999) {
    btnSubmit.style.display = "block";
  }
}


function realizarCalculo() {
  var valorDecimal = Number(numeroDecimal.value);

  //logica de transformar o decimal em binario

  let binario = valorDecimal.toString(2);

  //Mostrar na tela o resultado do calculo para binario
  resultadoBinario.innerHTML = binario;
  console.log(binario);

  //Logica de transformar o decimal em octal

  let octal = valorDecimal.toString(8);
  //Mostrar na tela o resultado do calculo para octal
  resultadoOctal.innerHTML = octal;
  console.log(binario);

  //Logica de transformar o decimal em octal

  let hexa = valorDecimal.toString(16);
  //Mostrar na tela o resultado do calculo para octal
  resultadoHexadecimal.innerHTML = hexa;
  console.log(hexa);
}