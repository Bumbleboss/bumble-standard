const utf = require('./unicodes');

class ComplexN {
  constructor(rl, im) {
    this.rl = rl;
    this.im = im;
  }

  toString() {
    return `${this.rl} ${(this.im < 0) ? `- ${this.im*-1+utf.i}` : `+ ${this.im}`+utf.i}` 
  }
}
exports.ComplexN = ComplexN;

/**
 * Addition in complex numbers
 */
exports.add = function(...args) {
  let i = 0, rl = 0, im = 0;
  for(; i < args.length; i++) {
    rl += args[i].rl;
    im += args[i+1].y;
  }
  return new ComplexN(rl, im);
}

/**
 * Subtraction in complex numbers
 */
exports.subtract = function(...args) {
  let i = 0, rl = args[0].rl, im = args[0].im;
  for (;i < args.length - 1; i++) {
    rl -= args[i+1].rl
    im -= args[i+1].im
  }
  return new ComplexN(rl, im);
}

/**
 * Multiplication in complex numbers
 * @param {Number} n factor
 * @param {ComplexN} a the factored complex number
 */
exports.multiply = function(n, a) {
  return new ComplexN(n*a.rl, n*a.im);
}

/**
 * Calculates the absolute value of a complex number
 * @param {ComplexN} a complex number
 */
function getAbsolute(a) {
  return Math.sqrt(Math.pow(a.rl, 2) + Math.pow(a.im, 2))
}
exports.getAbsolute = getAbsolute;

/**
 * Retrieves the polar form of a complex number
 * @param {ComplexN} a complex number
 */
exports.getPolarForm = function(a) {
  let theta = Math.atan2(a.im, a.rl);
  let r = getAbsolute(a);
  return `${r}(cos(${theta}) + ${utf.i}sin(${theta}))`
}

/**
 * Computes powers of a complex number using De Moivre's theorem
 * @param {ComplexN} a complex number
 * @param {Number} n exponent value
 */
exports.getDeMoivreTheorem = function (a, n) {
  let theta = Math.atan2(a.im, a.rl)*n;
  let r = Math.pow(getAbsolute(a), n);
  return `${r}(cos(${theta}) + ${utf.i}sin(${theta}))`
}

/**
 * Calculates the roots of a complex number
 * @param {ComplexN} a complex number
 * @param {Number} n number of roots
 */
exports.getRoots = function(a, n) {
  let theta = Math.atan(a.im/a.rl)+(a.rl<0?Math.PI:0);
  let r = Math.pow(getAbsolute(a), 1/n);
  let ans = []
  for(let i = 0; i < n; i++) {
    ans.push(new ComplexN(r*(Math.cos(((theta)+(2*i*Math.PI))/n)), r*(Math.sin(((theta)+(2*i*Math.PI))/n))))
  }
  return ans;
}