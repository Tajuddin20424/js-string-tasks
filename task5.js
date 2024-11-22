// ### Task-5:
// Capitalize Every first Letter of each word in a String


function capitalizeWords(str) {
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  

  const sentence = "capitalize every first letter of each word";
  console.log(capitalizeWords(sentence)); 