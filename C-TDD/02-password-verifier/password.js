function verify(password) {
  return password === null ||
    password.length < 8 ||
    !password.match(/[A-Z]/g) ||
    !password.match(/[0-9]/g)
    ? "Password rejected"
    : "Password accepted";
}

module.exports = verify;
