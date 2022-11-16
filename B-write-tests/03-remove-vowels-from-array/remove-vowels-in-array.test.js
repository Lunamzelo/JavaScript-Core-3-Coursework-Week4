let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words = ["Irina", "Etza", "Daniel"];
  // Act
  let wordsWithOutVowels = removeVowelsFromWords(words); 

  // Assert
  let output= ["rn", "tz", "Dnl"];
   
  expect(wordsWithOutVowels).toEqual(output)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
