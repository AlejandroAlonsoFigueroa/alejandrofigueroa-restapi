const models = require("../database/models");


const insertarInstrumento = async (req, res) =>{
    try{

        const user = await  models.Instrumento.create(req.body);
        return res.status(201).json({ user })

    }catch(error){
        return res.status(500).json({ error:  error.message })
    }
}


const obtenerInstrumentos = async (req, res) =>{
    try{

        const users = await  models.Instrumento.findAll({
            include: [

            ]
        });
        return res.status(201).json({ users })

    }catch(error){
        return res.status(500).json({ error:  error.message })
    }
}

module.exports= {
    insertarInstrumento, 
    obtenerInstrumentos
}