const giftsToProduce = {
    toy: "doll",
    quantity: 2,
}


function manufactureGifts(giftsToProduce) {
  const lista = []
  giftsToProduce.forEach((e)=> {
     if (e.quantity >0){
    lista.push(giftsToProduce.toy)
  }})
  
  return lista
}
console.log(manufactureGifts())