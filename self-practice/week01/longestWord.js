function longestWord(sentence) {
  if (typeof sentence !== 'string' || !sentence.trim()) {
    return "";
  }

  const words = sentence.split(' ');

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
module.exports = longestWord