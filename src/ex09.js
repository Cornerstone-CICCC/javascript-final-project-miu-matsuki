/**
 * Capitalize the first letter of every word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {

  if(Array.isArray(str))throw new Error('Argument must be a string');
  if(typeof str !== "string")throw new Error('String cannot be undefined');

  if(str === "")return("");

  return str
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word
    .slice(1))
    .join(' ');
}

module.exports = capitalizeWords;
