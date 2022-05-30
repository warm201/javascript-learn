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

console.log( 'y' in o)
console.log( typeof o)
console.log(Math.cos(12))

let n = 5
if (n === 1)
    console.log("you have 1 new message")
else
    console.log(`you have ${n} new message`)

let pairs = ""

for( let [k,v] of Object.entries(o)){
    pairs += k+v;
}
console.log(pairs)

let frequency = {}

for (let letter of "apple"){
    if(frequency[letter]){
        frequency[letter]++;
    }else{
        frequency[letter]=1;
    }
}
console.log(frequency)


let text = "na na na na na na na superman"
let wordset = new Set(text.split(" "))
let unique = []
for (let word of wordset){
    unique.push(word);
}
console.log(unique)