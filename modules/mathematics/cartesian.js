const config = require('../config');
const polar = require('./polar')
const radtodeg = 180/Math.PI;

class CartesianC {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }
}
exports.CartesianC = CartesianC;

/**
 * Converts cartesian to polar coordinate
 * @param {CartesianC} a cartesian coordinate
 */
exports.toPolar = function(a) {
  let theta = config.useRad?Math.atan2(a.y, a.x):Math.atan(a.y, a.x)*radtodeg;
  return new polar.PolarC(Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2)), theta)  
}