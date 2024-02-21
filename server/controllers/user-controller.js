const pool = require("../db");
const queries = require("../queries/queries");
const bcrypt = require("bcrypt");

//create users
const createUsers = async (req, res) => {
  try {
    const { role, name, firstname, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await pool.query(queries.createUsers, [
      role,
      name,
      firstname,
      email,
      hashPassword,
    ]);

    res.json(user.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
};

//get users
const getUsers = async (req, res) => {
  try {
    const user = await pool.query(queries.getUsers);
    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// get a user
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query(queries.getOneUser, [id]);

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// update the users
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role, name, firstname, email, password } = req.body;

    const updateUser = await pool.query(queries.updateUser, [
      role,
      name,
      firstname,
      email,
      password,
      id,
    ]);

    res.json("user is updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
};

// delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(queries.deleteUser, [id]);

    res.json("user was deleted");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
};

module.exports = {
  getUsers,
  createUsers,
  deleteUser,
  updateUser,
  getOneUser,
};
