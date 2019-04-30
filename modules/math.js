/*------------Unit 1: Vectors------------*/

//finding the component form for a unit with a start and ending point in a set of array
//usage: let a = [x1,y1], b = [x2,y2]
exports.findVectorComponentForm = function(a, b) {
  return [(b[0]-a[0]), (b[1]-a[1])];
}

//finding the vector length using a starting and ending point in a set of array
//usage: let a = [x1,y1], b = [x2,y2]
exports.findVectorLength = function(a, b) {
  return Math.sqrt(Math.pow((b[0]-a[0]), 2) + Math.pow((b[1]-a[1]), 2))
}


//addition in vectors, adding the vectors as an arguments in a set of array
//usage: let a = [x1,y1], b = [x2,y2]
exports.addVector = function() {
  let x = 0, y = 0, i = 0;
  for (;i < arguments.length; i++) {
    x += arguments[i][0]
    y += arguments[i][1]
  }
  return [x,y]
}