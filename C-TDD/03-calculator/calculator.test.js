let add = require("./calculator");

describe("requirement one", () => {
  test("return 0 if number is an empty string", function () {
    // Arrange
    let numbers = "";
    // Act
    let result = add(numbers);
    // Assert
    let expected = 0;

    expect(result).toEqual(expected);
  });
});

test(" if number is 1 or more return sum of numbers ", function () {
  // Arrange
  const numbers = "5";
  // Act
  const result = add(numbers);
  // Assert
  const expected = 5;
  expect(result).toEqual(expected);
});

test(" if number is > 1000 should be ignored, so adding 2 + 1001 = 2 ", function () {
  // Arrange
  const numbers = "1001,2";
  // Act
  const result = add(numbers);
  // Assert
  const expected = 2;
  expect(result).toEqual(expected);
});

test(" if there is a negative number return `negatives not allowed:`", function () {
  expect(() => add("-1,2,3")).toThrowError("Negative numbers not allowed: -1");
});
