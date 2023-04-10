const usuarios = [
    {
        id: 1,
        nome: "usuario 1",
        lName: "Brr"
    },
    {
        id: 2,
        nome: "usuario 2",
        lName: "Mmm"
    },
    {
        id: 3,
        nome: "usuario 3",
        lName: "Miu"
    },
]

const find = (req, res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map(function (valor) {
        if (valor.id == id) {
            found = true;
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({message: "Não foi encontrado"});
    }
}

const findAllUsuarios = (req,res) => {
    res.send(usuarios);
}

const createUsuario = (req,res) => {
    const usuario = req.body;
    
    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "O corpo da mensagem está vazio"});
    }

    if(!usuario.id){
        return res.status(400).send({message: "O campo 'id' não foi encontrado!"})
    }

    if(!usuario.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"})
    }

    if(!usuario.lName){
        return res.status(400).send({message: "O campo 'sobrenome' não foi encontrado!"})
    }

    usuario.nacionalidade = "brasileiro(a)";

    usuarios.push(usuario);
    res.status(201).send(usuarios);
}
const updateUsuario = (req, res) =>{
    const id = req.params.id;
    const usuario = req.body;
    let found = false;

    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "O corpo da mensagem está vazio"});
    }

    if(!usuario.id){
        return res.status(400).send({message: "O campo 'id' não foi encontrado!"})
    }

    if(!usuario.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"})
    }

    if(!usuario.lName){
        return res.status(400).send({message: "O campo 'sobrenome' não foi encontrado!"})
    }

    usuarios.map( function (valor, index){
        if (valor.id == id) {
            found = true;
            usuarios[index] = usuario;
            return res.send(usuarios[index]);
        }
    });

    if (!found){
        res.status(404).send({message: "Não foi encontrado"});
    }
} 

const deleteUsuario = (req,res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map(function (valor, index) {
        if (valor.id == id) {
            found = true;
            usuarios.splice(index, 1);
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({message: "Não foi encontrado"});
    }
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}