const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) =>{
    const categ = [];
    res.send(categ);
};

const create = (req, res) => {
    const categ = req.body;

    if(!categ || !categ.name){
        return res.status(400).send({message : "Dados invalidos!"})
    }

    const newCategory = categ.name;

    res.status(201).send('Categoria " '+ newCategory + ' " criada com sucesso');
};


module.exports = {
    findAll,
    create,
};