const express = require("express");
const app = express();
const usuario = require("./router/usuario.router");

const port = 3000;

app.use(express.json());

app.use("/usuario", usuario);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/contato", (req, res) => {
    res.send("Nosso contato: email@email.com");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

