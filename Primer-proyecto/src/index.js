function drawGift(size, symbol) {
  let inicio = ""
  let medio = ""
  let fin = ""
  let resultado = "" 
  if (!(size < 2)){
      for (let i = 0; i <= size; i++ ) {
        if (i >= 1 && i != size && size != 2){
          medio = symbol + " ".repeat(size-2) + symbol + "\n"
        }else {
          if (i == size){
          inicio = symbol.repeat(size)+ "\n"
        }else {
          fin = symbol.repeat(size)
        }}
}
    
    }else{
      return ""
    }
    if(size > 2){
      resultado = inicio + medio.repeat(size - 2) + fin
    } else{
      resultado = inicio + medio + fin
    }
  return resultado
}
console.log(drawGift(2, "%"))
console.log(drawGift(3, "%"))
console.log(drawGift(5, "%"))