// ### Task-1: 
// Count how many times a string has the letter `a`

// function countLetterA(str) {
//     return (str.match(/a/gi) || []).length;
// }


// const myString = "JavaScript is amazing!";
// console.log(countLetterA(myString)); 


function countA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'a') {
        count++;
      }
    }
    return count;
  }
  
  console.log(countA("Md.TAjuddin"));
  