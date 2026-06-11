/**
 * Classify numbers as positive, negative, or zero.
 * @param {number[]} arr
 * @returns {{positive: number[], negative: number[], zero: number[]}}
 */
function classifyNumbers(arr) {
  if (!arr) throw new Error('Array cannot be undefined');
  if (!Array.isArray(arr)) throw new Error('Argument must be an array');
  
  //console.log(arr)

  if ( arr.some((num)=> typeof num !== "number")) throw new Error('Array can only contain numbers');


  return {
    positive: arr.filter((number) => number > 0),
    negative: arr.filter((number) => number < 0),
    zero: arr.filter((number) => number === 0),
  };
}

module.exports = classifyNumbers;
