const { response } = require("express");
const dbData = require('../database/databaseFile');

const dbConnection = dbData();

const getAdmins = async (req, res = response) => {
    //instruccion SQL
    let sqlQuery = "SELECT * FROM administradores"
    dbConnection.query(sqlQuery, (err, results) => {
        if (err) console.log(err);
        if (results.length > 0) {
            res.status(200).send({
                message: "Administradores encontrados: ",
                data: results
            })
        }
        else{
            res.status(404).send({
                message: "No hay administradores almacenados."
            })
        }
    });
}

const removeAdmin = async (req, res = response) => {
    let adminID = req.body.id;
    let sqlQuery = `DELETE FROM administradores WHERE id = ${adminID}`
    dbConnection.query(sqlQuery, (err, results) =>{
        if (err) console.log(err);
        if (results.length > 0){
            res.status(200).send({
                message: "Administrador eliminado",
                data: results
            })
        }
        else{
            res.status(404).send({
                message: "Administrador no encontrado"
            })
        }
    })
}

module.exports = {
    getAdmins,
    removeAdmin
}