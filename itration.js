function cl (x){
    console.log(x)
}
function clT(x){
    console.log(typeof(x))
}

let name = "Tim Fagerdal"
let chars = []
for(let i = 0; i < name.length; i++){
    chars.push(name[i])
}

chars.forEach(c =>{
    cl(c)
})

let bw = chars.map(c =>{
    return c + c + c
})
cl(chars)
cl(bw)

let q = [1,5,12,22]
let sum = q.reduce((n, m) => {
    return n + m
})
cl(sum)
let filter = q.filter(n => {
    return n !==5
})
cl(filter)