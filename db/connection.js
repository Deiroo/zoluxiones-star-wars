const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'starwars'
    },
    pool: { min: 0, max: 1 },
    debug: false
});
module.exports = knex;
