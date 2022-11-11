const verify = require("./password-verifier");

/*  */

test("rejects passwords less than 8 characters", () => {
  const password = "hello";
  const expected = "Password rejected";
  const output = verify(password);
  expect(output).toEqual(expected);
});

test("rejects passwords which are null", () => {
  const password = null;
  const expected = "Password rejected";
  const output = verify(password);
  expect(output).toEqual(expected);
});

test("rejects passwords with no uppercase letter", () => {
  const password = "codeyourfuture";
  const expected = "Password rejected";
  const output = verify(password);
  expect(output).toEqual(expected);
});

test("rejects passwords with no number", () => {
  const password = "TestingIsCool";
  const expected = "Password rejected";
  const output = verify(password);
  expect(output).toEqual(expected);
});

test("accepts valid password", () => {
  const password = "Testing1sC00l";
  const expected = "Password accepted";
  const output = verify(password);
  expect(output).toEqual(expected);
});
