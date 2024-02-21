require("dotenv").config();
const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");
const middleware = require("./middelware/authmiddelware");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", usersRoutes);
app.use("/auth", authRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server sur le port ${port}`);
});
