const { response } = require("express");
const dbData = require('../database/databaseFile');

const dbConnection = dbData();

const getAdmins = async (req, res = response) => {
    //instruccion SQL
    let sqlQuery = "SELECT * FROM admins"
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
    let sqlQuery = `DELETE FROM admins WHERE id = ${adminID}`
    dbConnection.query(sqlQuery, (err, results) =>{
        if (err) console.log(err);
        if (results.affectedRows > 0){
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

const updateAdmin = async (req, res = response) => {
    let adminID = req.params.id;
    let adminName = req.body.name;
    let adminSurname = req.body.surname;
    let adminUsername = req.body.username;
    let adminTelephone = req.body.telephone;
    let adminPassword = req.body.password;
    let adminEmail = req.body.email;

    let sqlQuery = `UPDATE admins SET name = '${adminName}', surname = '${adminSurname}', username = '${adminUsername}', telephone = '${adminTelephone}', email = '${adminEmail}' WHERE id = ${adminID}`;

    dbConnection.query(sqlQuery,(err, results) =>{
        if(err) console.log(err);
        if(results.affectedRows == 1){
            res.status(200).send({
                message: 'Administrador actualizado.',
                data: results
            })
        }
        else{
            res.status(404).send({
                message:'Administrador no encontrado'
            })
        }
    });
}
const createAdmin = (req, res = response) =>{
    
    let adminName = req.body.name;
    let adminSurname = req.body.surname;
    let adminUsername = req.body.username;
    let adminTelephone = req.body.telephone;
    let adminPassword = req.body.password;
    let adminEmail = req.body.email;
    
    let sqlQuery = `INSERT INTO admins (name, surname, username, telephone, password, email)
                    values ('${adminName}', '${adminSurname}', '${adminUsername}', '${adminTelephone}', '${adminPassword}', '${adminEmail}')`;

    dbConnection.query(sqlQuery, (err, results) => {
        if(err) console.log(err);
        res.status(200).send({
            message: "User created",
            data: results
        })
    })

}
module.exports = {
    getAdmins,
    removeAdmin,
    updateAdmin, 
    createAdmin
}