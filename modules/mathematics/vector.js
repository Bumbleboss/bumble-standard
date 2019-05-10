const utf = require('./unicodes');
const config = require('../config');
const degtorad = Math.PI/180;
const radtodeg = 180/Math.PI;

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return  `${utf.vbl + this.x}, ${this.y + utf.vbr}`
  }

  toLinearCombination() {
    return `${this.x}i ${(this.y < 0) ? `- ${this.y*-1}` : `+ ${this.y}`}j` 
  }
}
exports.Vector = Vector;

/**
 * Calculates the component form of a vector using the start and end point
 * @param {Vector} a start point
 * @param {Vector} b end point
 */
exports.getComponentForm = function(a, b) {
  return new Vector(b.x - a.x, b.y - a.x);
}

/**
 * Calculates the magnitude of a vector by providing one or two Vector objects
 */
getMagnitude = function(...args) {
  if(args.length == 1) {
    return Math.sqrt(Math.pow(args[0].x, 2) + Math.pow(args[0].y, 2))
  }else{
    return Math.sqrt(Math.pow(args[1].x - args[0].x, 2) + Math.pow(args[1].y - args[0].y, 2));
  }
}
exports.getMagnitude = getMagnitude;

/**
 * Addition in vectors
 */
exports.add = function(...args) {
  let x = 0, y = 0, i = 0;
  for (;i < args.length; i++) {
    x += args[i].x;
    y += args[i].y;
  }
  return new Vector(x, y);
}

/**
 * Subtraction in vectors
 */
exports.subtract = function(...args) {
  let i = 0, x = args[0].x, y = args[0].y;
  for (;i < args.length - 1; i++) {
    x -= args[i+1].x
    y -= args[i+1].y
  }
  return new Vector(x, y);
}

/**
 * Multiplication in vectors
 * @param {Number} n factor
 * @param {Vector} v the factored vector
 */
exports.multiply = function(n, v) {
  return new Vector(n*v.x, n*v.y);
}

/**
 * Calculates the unit of a vector
 * @param {Vector} v the provided vector
 */
exports.getUnit = function(v) {
  let la = getMagnitude(v);
  return new Vector(v.x/la, v.y/la);
}

/**
 * Calculates the compnent form of a vector using its angle and magnitude
 * @param {Number} angle
 * @param {Number} magnitude
 */
exports.getComponentFormByAngleAndMagnitude = function(angle, magnitude) {
  let l = Math.abs(magnitude), a = (config.useRad?1:degtorad)*angle;
  return new Vector(l*Math.cos(a), l*Math.sin(a));
}

/**
 * Calculates the direction of a vector
 * @param {Vector} a the provided vector
 */
exports.getDirection = function(a) {
  return (config.useRad?1:radtodeg)*Math.atan2(a.y, a.x)
}

/**
 * Calculates the dot product of two vectors
 * @param {Vector} a first vector
 * @param {Vector} b second vector
 */
function getDotProduct(a, b) {
  return a.x*b.x + a.y*b.y;
}
exports.getDotProduct = getDotProduct;

/**
 * Checks if the two vectors provided are orthogonal 
 * @param {Vector} a first vector
 * @param {Vector} b second vector
 */
exports.isOrthogonal = function(a, b) {
  return 0 >= getDotProduct(a, b);
}

/**
 * Calculates the direction between two vectors
 * @param {Vector} a first vector
 * @param {Vector} b second vector
 */
exports.getDirectionBetweenTwoVectors = function(a, b) {
  return (config.useRad?1:radtodeg)*Math.acos((getDotProduct(a, b)/(getMagnitude(a)*getMagnitude(b))))
}