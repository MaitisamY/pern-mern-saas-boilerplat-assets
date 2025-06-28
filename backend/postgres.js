/**
 * @file config/db.js
 * This file connects to the PostgreSQL database using Sequelize.
 * It also initializes the database by creating tables if they do not exist.
 * The connectDB function is exported and imported into main.js.
 */

import { Sequelize, QueryTypes } from 'sequelize';
import { ENV } from '../constants/env.js';

const sequelize = new Sequelize(ENV.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log(`🔗 PostgreSQL connected in ${ENV.NODE_ENV} environment`);

        await initializeDatabase();
    } catch (error) {
        console.error('PostgreSQL connection error:', error);
        throw error;
    }
};

const initializeDatabase = async () => {
    const tables = [
        'logs',
        'blogs',
        'users',
        'pages',
        'menus',
        'footer',
        'reviews',
        'packages',
        'contact_form',
        'interactions',
        'chat_messages',
        'notifications',
    ];

    for (const table of tables) {
        const [result] = await sequelize.query(
            `SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = :table
            )`,
            {
                replacements: { table },
                type: QueryTypes.SELECT,
            }
        );

        if (!result.exists) {
            await sequelize.query(
                `CREATE TABLE "${table}" (
                    id SERIAL PRIMARY KEY,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )`
            );
            console.log(`🆕 Created '${table}' table`);
        }
    }
};

export default connectDB;
export { sequelize };

/**
 * This file connects to the PostgreSQL database using Sequelize.
 * It also initializes the database by creating tables if they do not exist.
 * The connectDB function is exported and imported into main.js.
 */
