const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "babou",
    password: "gingembre",
    port: 5432,
});

module.exports = pool;