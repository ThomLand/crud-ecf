const createUsers =
  "INSERT INTO users (role, name, firstname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *";
const getUsers = "SELECT * FROM users";

module.exports = {
  createUsers,
  getUsers,
};
