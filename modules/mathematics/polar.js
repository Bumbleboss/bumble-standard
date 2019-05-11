const utf = require('./unicodes');
const config = require('../config');
const cart = require('./cartesian')
const degtorad = Math.PI/180;

class PolarC {
  constructor(r, theta) {
    this.r = r;
    this.theta = theta;
  }

  toString() {
    return `(${this.r}, ${this.theta+(config.useRad?'':utf.degree)})`
  }
}
exports.PolarC = PolarC;

/**
 * Calculates the distance between two polar coordinates
 * @param {PolarC} a first polar coordinate
 * @param {PolarC} b second polar coordinate
 */
exports.getDistance = function(a, b) {
  let theta = (config.useRad?b.theta-a.theta:(b.theta-a.theta)*degtorad);
  return Math.sqrt(Math.pow(a.r, 2) + Math.pow(b.r, 2) - 2*a.r*b.r*Math.cos(theta))
}

/**
 * Converts polar to cartesian coordinate
 * @param {PolarC} a polar coordinate
 */
exports.toCartesian = function(a) {
  let theta = (config.useRad?a.theta:a.theta*degtorad);
  return new cart.CartesianC(a.r*Math.cos(theta), a.r*Math.sin(theta));
}

