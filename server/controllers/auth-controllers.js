const pool = require("../db");
const authqueries = require("../queries/auth-queries");
const bcrypt = require("bcrypt");

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(authqueries.createLogin, [email]);
    
    if (user.rows.length === 0) {
      return res.status(400).json({ msg: "Cet utilisateur n'existe pas" });
    }
    
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    
    if (!isMatch) {
      return res.status(400).json({ msg: "Email/Mot de passe incorrect" });
    } else {
      res.status(200).json({ user: user.rows[0] });
      }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { LoginUser };
