var pg = require('pg');

let pool = new pg.Pool({
    database: 'countries',
    port: 5432,
    ssl: false,
    max: 20, //set pool max size to 20
    min: 4, //set min pool size to 4
    idleTimeoutMillis: 1000 //close idle clients after 1 second
});

module.exports = pool;