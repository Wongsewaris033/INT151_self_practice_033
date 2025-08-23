/* โจทย์จากในห้องเรียน
Write a function getFreqOfWords(sentence) that returns an object with keys representing unique words in lowercase 
and values representing the frequency of occurrences of each word with ignore case in the sentence.
If the input string is null or undefined, return undefined.

Output:

console.log(getFreqOfWords('Today is present and present is your gift'))
{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }

console.log(getFreqOfWords('Do you best just do it'))
{ do: 2, you: 1, best: 1, just: 1, it: 1 }

console.log(getFreqOfWords(null)) // undefined

console.log(getFreqOfWords(undefined)) // undefined
*/

function getFreqOfWords(sentence) {
    if (sentence === null || undefined) return undefined;
    const words = sentence.toLowerCase().split(" ");
    const freq = {};
  
    for (const word of words) {
      freq[word] = (freq[word] || 0) + 1;
    }
  
    return freq;
}

console.log(getFreqOfWords('Today is present and present is your gift'));
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }

console.log(getFreqOfWords('Do you best just do it'));
// { do: 2, you: 1, best: 1, just: 1, it: 1 }

console.log(getFreqOfWords(null));       // undefined
console.log(getFreqOfWords(undefined));  // undefined

//--------------------

function Hello() {
    console.log("Hello");
  }
  function callFunc(func) {
    func();
  }
  callFunc(Hello);

//--------------------

function Sum(...a){
    let answer = 0
    for(i = 0; i < arguments.length; i++){
        answer += arguments[i]
    }
    return answer
}
 
console.log(Sum())
console.log(Sum(1))
console.log(Sum(1,2))
console.log(Sum(1,2,3))