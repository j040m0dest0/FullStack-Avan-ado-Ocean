const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) =>{
    const items = [];
    res.send(items);
};

const findById = (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)){
        return res.status(400).send({message : "ID invalido!"})
    }

    const item = {};

    if(!item){
        return res.status(404).send({message: "Item não encontrado"});
    }
    
    res.send(item);
};

const create = (req, res) => {

};

const update = (req, res) => {

};

const deleteById = (req, res) => {

};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};