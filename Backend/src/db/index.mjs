import { Sequelize } from 'sequelize';

const db = new Sequelize(
    process.env.PGDATABASE,  // Database name
    process.env.PGUSER,      // Database user
    process.env.PGPASSWORD,  // Database password
    {
        host: process.env.PGHOST,  // Database host
        dialect: 'postgres',       // Database dialect
        pool: {
            max: 5,        // Maximum number of connections in pool
            min: 0,        // Minimum number of connections in pool
            acquire: 30000, // Maximum time (in ms) to try to acquire a connection before throwing error
            idle: 10000    // Maximum time (in ms) a connection can be idle before being released
        }
    }
);

export default db;