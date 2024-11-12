
// let f = () => {

//   let inp = document.querySelector(".inp")
//   let value = inp.value
//   let newString = value.slice(0, -1);
//   inp.value = newString
// }
let f = ()=>{
  let a = document.querySelector(".subbox1")
  let b = document.querySelector(".subbox2")
  a.style.display  = "none"
  b.style.display  = "block"
}
let fun = ()=>{
  let a = document.querySelector(".subbox1")
  let b = document.querySelector(".subbox2")
  a.style.display  = "block"
  b.style.display  = "none"
}