function longestWord(sentence) {
  if (typeof sentence !== 'string' || !sentence.trim()) {
    return "";
  }

  const b = sentence.split(' ');

  let longest = "";

  for (let a of b) {
    if (a.length > longest.length) {
      longest = a;
    }
  }

  return longest;
}
module.exports = longestWord