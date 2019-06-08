/**
 * Calculates the margin of sampling error by providing its proportion
 * @param {Number} n the sample proportion 
 * @returns {Number} the sampling error in percentage 
 */
exports.samplingError = function(n) {
  return Math.round((1/Math.sqrt(n)*100)*100)/100;
}

/**
 * Calculates the standard deviation
 * @param {Array<Number>} n data values
 */
exports.standardDeviation = function(n) {
  let m = mean(n), u = 0, i = 0;
  for(; i < n.length; i++) {
    u += Math.pow(n[i] - m, 2);
  }
  return Math.round(Math.sqrt(u/n.length)*100)/100;
}

/**
 * Calculates the mean of the provided values
 * @param {Array<Number>} n data values 
 */
function mean(n) {
  let u = 0, i = 0;
  for(; i < n.length; i++) {
    u += n[i];
  }
  return u/n.length
}
exports.mean = mean;


/**
 * Calculate a number's factorial
 * @param {Number} num number to factorialize 
 */
function factorialize(num) {
  if(num === 0 || num === 1) {
    return 1;
  }
  for(let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
exports.factorialize = factorialize;

/**
 * Calculates the the combination of items
 * @param {Number} n number of items 
 * @param {Number} r number of items chosen
 */
function combination(n, r) {
  return factorialize(n)/(factorialize(n - r)*factorialize(r))
}
exports.combination = combination;

// to be changed later once figured a better way of doing it
/**
 * Calculates the normal distribution and rounds it using
 * @param {Number} m mean of normal distribution
 * @param {Number} sd the standard deviation number
 * @param {Number} n the value X that represents the position for above and under
 * @param {Boolean} pos whether the distrubition should be above or under. Above = true, Under = false.
 */
exports.normalDistribution = function(m, sd, n, pos) {
  let num = [m, m-sd, m+sd, m-(2*sd), m+(2*sd), m-(3*sd), m+(3*sd)].sort();
  let ans = 0;
  if(pos) {
    if(n < num[0]) {
      ans += 0.5;
    }
    if(n < num[1]) {
      ans += 2;
    }
    if(n < num[2]) {
      ans += 13.5;
    }
    if(n < num[3]) {
      ans += 34;
    }
    if(n < num[4]) {
      ans += 34;
    }
    if(n < num[5]) {
      ans += 13.5;
    }
    if(n < num[6]) {
      ans += 2.5;
    }
  }else{
    if(n > num[0]) {
      ans += 2.5;
    }
    if(n > num[1]) {
      ans += 2;
    }
    if(n > num[2]) {
      ans += 13.5;
    }
    if(n > num[3]) {
      ans += 34;
    }
    if(n > num[4]) {
      ans += 34;
    }
    if(n > num[5]) {
      ans += 13.5;
    }
    if(n > num[6]) {
      ans += 0.5;
    }
  }
  return ans;
}

/**
 * Calculates the binomial distribution and returns an array
 * @param {Number} n number of tries
 * @param {Number} p number of successes
 * @param {Number} q number of failures
 */
exports.binomialDistribution = function(n, p, q) {
  let ans = [];
  for(let i = 0; i < n+1; i++) {
    ans.push(Math.round(combination(n, i) * Math.pow(p, i) * Math.pow(q, n-i)*1000)/1000)
  }
  return ans;
}