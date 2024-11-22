// ### Task-3: 

// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 



function containsAllVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // str = str.toLowerCase(); 
  
    return vowels.every(vowel => str.includes(vowel)); 
  }
  

  console.log(containsAllVowels("education"));  
  console.log(containsAllVowels("hello"));    
  
  