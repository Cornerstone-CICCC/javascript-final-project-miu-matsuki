/**
 * Calculate the average of an array of numbers.
 * @param {number[]} arr
 * @returns {number}
 */
function calculateAverage(arr) {
  if (!arr) throw new Error('Array cannot be undefined');
  if (!Array.isArray(arr)) throw new Error('Argument must be an array');
  if (arr.length <= 0) throw new Error('Array cannot be empty');


    //console.log(arr)
  const total = arr.reduce((sum, number) => {
    //console.log(sum)
    if (typeof number !== "number") throw new Error('Array can only contain numbers');
    return sum + number
   // console.log(sum)
  }, 0);
  return total / arr.length;
}

module.exports = calculateAverage;
