const { app } = require('../config');

app.get('/', (request, response) => {
  response.send('Minha primeira rota');
});

module.exports = app;
