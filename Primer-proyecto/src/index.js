function decodeSantaPin(code) {
  let codigoFinal = "";
  const primerFiltro = code.split("]");
  const primerVerif = primerFiltro.filter(e => e != "");
  for (let i = 0; i < primerVerif.length; i++) {
    let segFiltro = primerVerif[i].split("[");
    let digito = segFiltro[1]; 
    if (digito == "<") {
       if (codigoFinal.length > 0) {
          codigoFinal = codigoFinal + codigoFinal[codigoFinal.length - 1];
       }
    } 
    else {
       let numBase = parseInt(digito[0]); 
       for (let j = 1; j < digito.length; j++) {
          if (digito[j] == "+") numBase++;
          if (digito[j] == "-") numBase--;
       }
       let digitoResuelto = ((numBase % 10) + 10) % 10;
       codigoFinal = codigoFinal + digitoResuelto;
    }
  }
  if (codigoFinal.length < 4) {
    return null;
  }
  return codigoFinal;
}
const codeo = "[1--][1-+][8++][7++]"
console.log(decodeSantaPin(codeo))


//Puedo usar un replace para modificar los "-" y "+"