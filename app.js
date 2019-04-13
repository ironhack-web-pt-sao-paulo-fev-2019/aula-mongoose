// passo 1 - conectamos ao banco de dados

// passo 2 - configurar o model

// passo 3 - configurando um documento

// passo 4 - criando um documento

// passo 5 - procurando pelos documentos

// passo 6 - criando rotas

const { app } = require('./config');

const Routes = require('./routes');

app.listen(3000, 'localhost', (error) => {
  if (error) {
    console.log('Erro ao subir o servidor na porta 3000');
  } else {
    console.log('App rodando na porta 3000');
  }
});
