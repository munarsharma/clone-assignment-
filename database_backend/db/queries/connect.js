const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/nomblr_db");

module.exports = { db };
