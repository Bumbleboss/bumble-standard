const math = require('./modules/math');

let a = [2, 5]
let b = [-3, 0]
let c = [-4, 1]

console.log(`component form --- ${math.findVectorComponentForm(a,b)}`);
console.log(`vector length --- ${math.findVectorLength(a,b)}`)
console.log(`vector addition --- ${math.addVector(a, b)}`)