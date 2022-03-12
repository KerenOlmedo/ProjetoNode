const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Funcionou')
});

app.post('/', (req, res) => {
    const {nome, idade, cidade} = req.body
    res.send(`dados:${nome}, ${idade}, ${cidade}`)
});

app.put('/:id', (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    res.send(`Novo nome: ${nome}`)
});

app.delete('/', (req, res) => {
    const id = req.query.id
    const email = req.query.email
    res.send(`O parametro digitado é ${id}, ${email}`)
});

app.listen(3000, () => console.log('Servidor funcionando na porta 3000'));
