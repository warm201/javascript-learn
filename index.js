let objecOne = {x:1}

let objectTwo = objecOne

console.log(objecOne === objectTwo)

let a  =[1,2,3,4,5]

let c = Array.from(a)

console.log(c)

console.log('7' * '4')

let point = {x:1 , y:1}
console.log("toString" in point)

let o = {x:1 , y:2}
delete o.x
console.log( 'y' in o)
console.log( typeof o)