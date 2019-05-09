const utf = require('./unicodes')
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
 * Gets the component form of a vector using the start and end point
 * @param {Vector} a start point
 * @param {Vector} b end point
 */
exports.getComponentForm = function(a, b) {
  return new Vector(b.x - a.x, b.y - a.x);
}

/**
 * Gets the length of a vector using a start and end point
 * @param {Vector} a start point
 * @param {Vector} b end point
 */
getLength = function() {
  let args = arguments;
  if(args.length == 1) {
    let eq = Math.pow(args[0].x, 2) + Math.pow(args[0].y, 2);
    return {
      ans: Math.sqrt(eq),
      toString: function() {
        return (Number.isInteger(this.ans) ? this.ans : utf.sqrt + eq);
      }
    }
  }else{
    let eq = Math.pow(args[1].x - args[0].x, 2) + Math.pow(args[1].y - args[0].y, 2);
    return {
      ans: Math.sqrt(eq),
      toString: function() {
        return (Number.isInteger(this.ans) ? this.ans : utf.sqrt + eq);
      }
    }
  }
}
exports.getLength = getLength;

/**
 * Addition in vectors
 */
exports.add = function() {
  let x = 0, y = 0, i = 0;
  for (;i < arguments.length; i++) {
    x += arguments[i][0];
    y += arguments[i][1];
  }
  return new Vector(x, y);
}

/**
 * Subtraction in vectors
 */
exports.subtract = function() {
  let i = 0, x = arguments[0][0], y = arguments[0][1];
  for (;i < arguments.length - 1; i++) {
    x -= arguments[i+1][0]
    y -= arguments[i+1][1]
  }
  return new Vector(x, y);
}

/**
 * Multiplication in vectors
 * @param {Number} n number
 * @param {Vector} v the vector that is multiplied
 */
exports.multiply = function(n, v) {
  return new Vector(n*v.x, n*v.y);
}

/**
 * Gets the unit of a vector
 * @param {Vector} v the provided vector
 */
exports.getUnit = function(v) {
  let la = getLength(v).ans;
  let ls = getLength(v).toString();
  return {
    ans: new Vector(v.x/la, v.y/la),
    toString: function() {
      if(Number.isInteger(la)) {
        return new Vector(v.x+utf.divison+ls, v.y+utf.divison+ls)
      }
      return new Vector(v.x+ls+utf.divison+Math.round(la*la), v.y+ls+utf.divison+Math.round(la*la))
    }
  }
}