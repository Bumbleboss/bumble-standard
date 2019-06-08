const math = require('./modules/math');
const config = require('./modules/config');
const sa = math.stats_probability;
//just sandbox for now

let u = [85, 80, 75, 75, 70, 75, 75, 65, 75, 75, 75, 80, 75, 75, 70, 80, 70, 75, 75, 75, 75, 75, 75];

console.log(sa.binomialDistribution(5, 0.35, 0.65));