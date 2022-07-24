require('dotenv').config();

module.exports = {
  // development: {
  //   username: process.env.MYSQL_USER || 'root',
  //   password: process.env.MYSQL_PASSWORD || '1234',
  //   database: 'XP_psel',
  //   host: process.env.MYSQL_HOST || 'localhost',
  //   port: process.env.MYSQL_PORT || '3306',
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     decimalNumbers: true,
  //   },
  //   define: {
  //     timestamps: false,
  // },
  // },
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
  development: {
    username: 'mtmpw9azhueov397',
    password: 'bdk76rf0b1yu0gzu',
    database: 'eqdx1ivj5j1rt4jv',
    host: 'bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
    define: {
      timestamps: false,
    },
  },
};
