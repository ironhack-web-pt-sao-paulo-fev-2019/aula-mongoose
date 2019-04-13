const app = require('./routes');

// Conectar Servidor
app.listen(3000, 'localhost', (err) => {
    err ? console.log(err) : console.log('Servidor conectado') 
});