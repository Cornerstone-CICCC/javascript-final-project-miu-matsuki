/**
 * Rotate the values in an array to the right.
 * Negative positions rotate the array to the left.
 * @param {Array} arr
 * @param {number} positions
 * @returns {Array}
 */
function rotateArray(arr, positions) {
  //arr-----------------------------------------
  if (!arr) throw new Error('Array cannot be undefined');
  if (!Array.isArray(arr)) throw new Error('Argument must be an array');
  // positions----------------------------------
  if (!positions && positions !== 0) throw new Error('Positions cannot be undefined');
  if (typeof positions !== "number") throw new Error('Positions must be a number');
  if(positions %1 !== 0) throw new Error ('Positions must be an integer')

  //--------------------------------------------
  //positive
 
  let splitIndex = arr.length - positions; //3
  let output =  [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];

  if(positions < 0){
     splitIndex = positions * -1; //1
     if(positions*-1 >  arr.length){
      splitIndex = (positions + arr.length) * -1;
     }

     output =  [...arr.slice(splitIndex),...arr.slice(0, splitIndex)]; // 234   1
  }

  return output;
}

module.exports = rotateArray;
