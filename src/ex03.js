/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} number
 * @returns {number}
 */
function calculateFactorial(number) {
  if (!number && number!== 0) throw new Error('Number cannot be undefined');
  if(number < 0) throw new Error('Number cannot be negative');
  //0.01, 1.24
  if(number % 1 !== 0) throw new Error('Number must be an integer');
  if (typeof number !== "number") throw new Error('Argument must be a number');


  let result = 1;

  for (let current = 1; current <= number; current += 1) {
    result *= current;
  }

  return result;
}

module.exports = calculateFactorial;
