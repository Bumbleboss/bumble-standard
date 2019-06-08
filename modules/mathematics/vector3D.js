const utf = require('./unicodes');
const config = require('../config');
const radtodeg = 180/Math.PI;

class Vector3D {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toString() {
    return  `${utf.vbl + this.x}, ${this.y}, ${this.z + utf.vbr}`
  }

  toLinearCombination() {
    return `${this.x}i ${(this.y < 0) ? `- ${this.y*-1}` : `+ ${this.y}`}j ${(this.z < 0) ? `- ${this.z*-1}` : `+ ${this.z}`}k` 
  }
}
exports.Vector3D = Vector3D;

/**
 * Calculates the component form of a vector using the start and end point
 * @param {Vector3D} a start point
 * @param {Vector3D} b end point
 */
exports.componentForm = function(a, b) {
  return new Vector3D(b.x - a.x, b.y - a.x, b.z - a.z);
}

/**
 * Calculates the magnitude of a vector by providing one or two Vector3D objects
 */
function magnitude(...args) {
  if(args.length == 1) {
    return Math.sqrt(Math.pow(args[0].x, 2) + Math.pow(args[0].y, 2) + Math.pow(args[0].z, 2))
  }else{
    return Math.sqrt(Math.pow(args[1].x - args[0].x, 2) + Math.pow(args[1].y - args[0].y, 2) + Math.pow(args[1].z - args[0].z, 2));
  }
}
exports.magnitude = magnitude;

/**
 * Calculates the midpoint of two vectors
 * @param {Vector3D} a first vector
 * @param {Vector3D} b second vector
 */
exports.midPoint = function(a, b) {
  return new Vector3D((a.x+b.x)/2, (a.y+b.y)/2, (a.z+b.z)/2)
}

/**
 * Addition in vectors
 */
exports.add = function(...args) {
  let x = 0, y = 0, z = 0, i = 0;
  for (;i < args.length; i++) {
    x += args[i].x;
    y += args[i].y;
    z += args[i].z;
  }
  return new Vector3D(x, y, z);
}

/**
 * Subtraction in vectors
 */
exports.subtract = function(...args) {
  let i = 0, x = args[0].x, y = args[0].y, z = args[0].z;
  for (;i < args.length - 1; i++) {
    x -= args[i+1].x
    y -= args[i+1].y
    z -= args[i+1].z
  }
  return new Vector3D(x, y, z);
}

/**
 * Multiplication in vectors
 * @param {Number} n factor
 * @param {Vector3D} v the factored vector
 */
exports.multiply = function(n, v) {
  return new Vector3D(n*v.x, n*v.y, n*v.z);
}

/**
 * Calculates the unit of a vector
 * @param {Vector3D} v the provided vector
 */
exports.unit = function(v) {
  let la = magnitude(v);
  return new Vector3D(v.x/la, v.y/la, v.z/la);
}

/**
 * Calculates the dot product of two vectors
 * @param {Vector3D} a first vector
 * @param {Vector3D} b second vector
 */
function dotProduct(a, b) {
  return a.x*b.x + a.y*b.y + a.z*b.z;
}
exports.dotProduct = dotProduct;

/**
 * Checks if the two vectors provided are orthogonal 
 * @param {Vector} a first vector
 * @param {Vector} b second vector
 */
exports.isOrthogonal = function(a, b) {
  return 0 >= dotProduct(a, b);
}

/**
 * Calculates the direction between two vectors
 * @param {Vector3D} a first vector
 * @param {Vector3D} b second vector
 */
exports.getDirectionBetweenTwo3DVectors = function(a, b) {
  return (config.useRad?1:radtodeg)*Math.acos((dotProduct(a, b)/(magnitude(a)*magnitude(b))))
}

/**
 * Calculates the cross product of the provided vectors
 * @param {Vector3D} a first vector
 * @param {Vector3D} b second vector
 */
function crossProduct(a, b) {
  return new Vector3D((a.y*b.z - a.z*b.y), -1*(a.x*b.z - a.z*b.x), (a.x*b.y - a.y*b.x));
}
exports.crossProduct = crossProduct;

/**
 * Calculates the triple scalar product of the provided vectors
 * @param {Vector3D} a first vector
 * @param {Vector3D} b second vector
 * @param {Vector3D} c third vector
 */
exports.tripleScalarProduct = function(a, b, c) {
  let ans = crossProduct(a, b);
  return new Vector3D(ans.x*c.x, ans.y*c.y, ans.z*c.z);
}