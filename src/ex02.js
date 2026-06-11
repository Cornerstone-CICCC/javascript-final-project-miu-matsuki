/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  
  //console.log(arr)
  if (!arr) throw new Error('Array cannot be undefined');
  if (!Array.isArray(arr)) throw new Error('Argument must be an array');
 
  return arr.reduce((total, number) => {
    console.log(total);
    if (typeof number !== "number") throw new Error('Array can only contain numbers');
    return Number(total + number)
 }
  ,0);
}

module.exports = sumArray;
