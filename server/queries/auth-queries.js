const createLogin = "SELECT * FROM users WHERE email=$1";
const getUsers = "SELECT * FROM users";

module.exports = {
  createLogin,
  getUsers,
};
