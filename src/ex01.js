/**
 * Find the maximum number in an array of numbers
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  
  if (!arr) throw new Error('Array cannot be undefined');
  if (!Array.isArray(arr)) throw new Error('Argument must be an array');
  if (arr.length <= 0) throw new Error('Array cannot be empty');

  console.log(arr)

  //Set max
  let max= arr[0];
  arr.map((num)=>{
    
    if (typeof num !== "number") throw new Error('Array can only contain numbers');
    if(num > max){
      //   console.log(num>max)
      max = num;
    }
})

console.log(Number(max))
return Number(max)
}

module.exports = findMax;
