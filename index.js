const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  //.map() allow us to copy the original array and we can manipulate it
  return tutorials.map(function(tutorial) {
    //split a sentence into seperate words using .split() method e.g '['what, does, the, this, keyword, mean?']
    let words = tutorial.split(" ");
    console.log(words);
// loop through the words and return the first character into uppercase using .upperCase() method. 
// slice(1) helps to remove the first char in a word and we concatenate to the remaining part to the upperCase letter.
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    console.log(words);
    //join() helps us to join the split sentence into one complete sentence
    return words.join(" ");
  });
}

console.log(titleCased());






// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }
// titleCase("I'm a little tea pot");