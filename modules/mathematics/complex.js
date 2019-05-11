const utf = require('./unicodes');
const config = require('../config');
const degtorad = Math.PI/180;
const radtodeg = 180/Math.PI;

class ComplexN {
  constructor(rl, im) {
    this.rl = rl;
    this.im = im;
  }

  toString() {
    return `${this.rl}i ${(this.im < 0) ? `- ${this.im*-1}` : `+ ${this.im}`+utf.i}` 
  }
}
exports.ComplexN = ComplexN;

/**
 * Calculates the absolute value of rl complex number
 * @param {ComplexN} a complex number
 */
function getAbsolute(a) {
  return Math.sqrt(Math.pow(a.rl, 2) + Math.pow(a.im, 2))
}
exports.getAbsolute = getAbsolute;

/*
exports.getPolarForm = function(a) {
  let theta = Math.atan2(a.im, a.rl)*degtorad;
  let r = getAbsolute(a);
  return r*Math.cos(theta)+' + '+ r*Math.sin(theta)+utf.i
}*/