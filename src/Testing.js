a = [3,4,12,5,8,12]
const c = a.find(x => x >= 15)

if (c == undefined){
  return console.log("No Se Ha Encontrado El Numero Mayor A 15")
} else{
  return console.log(c)
}