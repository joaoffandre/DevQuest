const a=5
const b="5"
const c=10

console.log("Operador && ('and' lógico)")

console.log(a==b && a<=c)
//true + true = true

console.log(a===b && a<c)
//false + true = false

console.log(a===b && a>c)
//false + false = false

console.log("Operador || ('or' lógico)")

console.log(a==b || a<c)
//true + true = true

console.log(a===b || a<c)
//false + true = true

console.log(a===b || a>c)
//false + false = false

console.log("Operador ! ('not' lógico)")

console.log(!(a==b))
// ! true = false

console.log(!(a>c))
// !false = true

