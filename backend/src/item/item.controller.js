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
    const item = req.body;

    if(!item || !item.name || !item.imageUrl || !item.category){
        return res.status(400).send({message : "Dados invalidos!"})
    }

    const newItem = {};

    res.status(201).send(newItem);

};

const update = (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)){
        return res.status(400).send({message : "ID invalido!"});
    }

    const item = req.body;

    if(!item || !item.name || !item.imageUrl || !item.category){
        return res.status(400).send({message : "Dados invalidos!"});
    }

    const updatedItem = {};

    if(!updatedItem){
        return res.send(404).send({messagem:"Item não encontrado!"});
    }

    res.send({message: "Item atualizado com sucesso!" });

};

const deleteById = (req, res) => {
    const id = req.params.id;

    if(!isObjectIdValid(id)){
        return res.status(400).send({message : "ID invalido!"});
    }

    const deletedItem = {};

    if(!deletedItem){
        return res.status(400).send({message : "Item não encontrado!"});
    }

    res.send({message: "Item excluido com sucesso!" });

};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};