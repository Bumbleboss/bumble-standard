const math = require('./modules/math');
const config = require('./modules/config');

let v = math.Vector3D;
let z = new v.Vector3D(2, 4, -3);
let w = new v.Vector3D(1, -5, 3);
let y = new v.Vector3D(4, -2, -2);

console.log(v.getTripleScalarProduct(z, w, y))

