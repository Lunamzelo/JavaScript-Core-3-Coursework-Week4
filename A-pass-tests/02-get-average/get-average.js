// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings





function average(numbers) {
  let sum = 0;
  let intNum = numbers.filter((num) => typeof num === "number");
  for (let i = 0; i < intNum.length; i++) {
    sum += intNum[i];
    
  }
  return sum / intNum.length;
}




module.exports = average;
