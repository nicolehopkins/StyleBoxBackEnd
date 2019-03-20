const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/stylebox');

module.exports = {
    db,
}