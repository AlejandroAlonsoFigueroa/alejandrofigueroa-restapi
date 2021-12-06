require ("dotenv").config();


const server = require ("./server");

const PORT = process.env.PORT || 8097;

server.listen(PORT, () => console.log("Servidor encendido en el puerto 8097"));























/*const express = require("express");
const app = express();
const models = require("./database/models")


app.use(express.json());




app.get('/api/instrumentos', (req, res) =>{
    const todosInstrumentos =  obtenerInstrumentos
    return res.status(200).json( { todosInstrumentos})
    res.send(instrumentosMusicales);
    }
);

app.post('/api/instrumentos', (req, res) =>{
    const unInstrumento =  insertarInstrumento
    return res.status(201).json( { unInstrumento})
    res.send(unInstrumento);
    }
);

const obtenerInstrumentos = async (req, res) =>{
    console.log("Obteniendo usuarios");
    try{
       const misInstrumentos = await models.findAll({
           include: [

           ]
       });
       return res.json({ misInstrumentos })
    }catch(error){
        return res.status(500).send(error.message);
    }
}

const insertarInstrumento = async (req, res) =>{
    console.log("Obteniendo usuarios");
    try{
       const instrumento = await models.create(req.body);
       return res.status(201).json({ instrumento })
    }catch(error){
        return res.status(500).send(error.message);
    }
}




const port = process.env.port || 1234;
app.listen(port, ()  => console.log("Escuchando en el puerto 1234 ..."))*/