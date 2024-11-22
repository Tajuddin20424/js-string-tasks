// ### Task-2: 
// Count how many times a string has the letter `a` or `A`

function countA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'a') {
        count++;
      }

    if (str[i].toUpperCase() === 'A'){
        count++;
    }
    }
    
    return count;
  }
  
  console.log(countA("JavaScript is Amazing"));




  
  