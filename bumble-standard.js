const math = require('./modules/math');

let a = [2, 5]
let b = [-3, 0]
let c = [-4, 1]
let v = [-2, 3]

console.log(`component form --- ${math.findVectorComponentForm(a,b)}`);
console.log(`vector length --- ${math.findVectorLength(a,b)}`)
console.log(`vector length for one --- ${math.findVectorLength(v)}`)
console.log(`vector addition --- ${math.addVector(c,a)}`)
console.log(`vector subtraction --- ${math.subtractVector(b, a)}`)
console.log(`vector multiplication --- ${math.multiplyVector(2, a)[0]}`)
console.log(`unit vector --- ${math.findUnitVector(v)}`)


