const a = [3,4,12,5,8,12]
const c = a.find(x => x >= 15)

const d = (c)=>{
  if (c == undefined){
    return "No Se Ha Encontrado El Numero Mayor A 15"
  } else{
    return c
  }
}
console.log(d(c))


let val 
const t = (val = () => {})