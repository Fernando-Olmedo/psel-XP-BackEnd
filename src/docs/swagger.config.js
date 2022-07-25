const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'XP psel back-end',
      description: 'Api utilizada no processo seletivo da XP no desafio de back-end',
      version: '1.0',
    },
    server: [{
      url: 'https://xp-psel-back-end.herokuapp.com',
      description: 'Api disponibilizada por meio do Heroku',
    }],
  },
  apis: ['.src/routes/index.js'],
};

module.exports = { swaggerConfig };