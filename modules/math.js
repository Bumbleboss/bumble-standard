/*------------Unit 1: Vectors------------*/

//finding the component form for a unit with a start and ending point in a set of array
exports.findVectorComponentForm = function(a, b) {
  return [(b[0]-a[0]), (b[1]-a[1])];
}

//finding the vector length using a starting and ending point in a set of array, also works unit vector
//usage: let a = [x1,y1], b = [x2,y2]
function findVectorLength() {
  let arg = arguments;
  if(arg.length == 1) {
    return Math.sqrt(Math.pow(arg[0][0], 2) + Math.pow(arg[0][1], 2));
  }else{
    return Math.sqrt(Math.pow((arg[1][0]-arg[0][0]), 2) + Math.pow((arg[1][1]-arg[0][1]), 2));
  }
}
exports.findVectorLength = findVectorLength;

//addition in vectors, adding the vectors as an arguments in a set of array
//usage: let a = [x1,y1], b = [x2,y2]
exports.addVector = function() {
  let x = 0, y = 0, i = 0;
  for (;i < arguments.length; i++) {
    x += arguments[i][0];
    y += arguments[i][1];
  }
  return [x,y];
}

//subtraction in vectors, adding the vectors as an arguments in a set of array
//usage: let a = [x1,y1], b = [x2,y2]
exports.subtractVector = function() {
  let i = 0, answer = [];
  for (;i < arguments.length - 1; i++) {
    answer.push([arguments[i][0] - arguments[i+1][0], arguments[i][1] - arguments[i+1][1]])
  }
  return answer[0];
}

//subtraction in vectors, adding the vectors as an arguments in a set of array
//usage: let x = 2, b = [x1,y1]
exports.multiplyVector = function() {
  let i = 0, base = arguments[0], answer = [];
  for (;i < arguments.length - 1; i++) {
    answer.push([arguments[i+1][0]*base, arguments[i+1][1]*base]);
  }
  return answer;
}

exports.findUnitVector = function(v) {
  return [v[0]/findVectorLength(v), v[1]/findVectorLength(v)]
}
