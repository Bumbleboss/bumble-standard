const math = require('./modules/math');
const config = require('./modules/config');
const cn = math.ComplexNumbers;

//just sandbox for now

console.log(cn.getRoots(new cn.ComplexN(-4, -4), 4));