require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '1234',
    database: 'XP_psel',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false,
  },
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '1234',
    database: 'XP_psel',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false,
  },
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '1234',
    database: 'XP_psel',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || '3306',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false,
  },
  },
};
