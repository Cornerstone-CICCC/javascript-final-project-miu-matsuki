/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  
  if(!str&& str!=="")throw new Error ('String cannot be undefined'); 

  if(typeof str !== "string")throw new Error ('Argument must be a string');
  
  let outCharacters = 0;
  let outWord = 0;
  let outSentence = 0;

  //returns zero values for an empty string
  if(str !== ""){
    
    //returns zero values for a string containing only spaces
    if(str.trim().split(/\s+/).join("") !== ""){
      outWord = str.trim().split(/\s+/).length;
      outSentence = str.replace("!", ".").replace("?", ".").split('.').length - 1;
      //'does not require punctuation for one sentence'
      if(outSentence === 0) {outSentence+=1}

    }
  }

  return {
    characters: str.length,
    words:outWord,
    sentences: outSentence
  };
}

module.exports = analyzeText;
