const { Schema, model } = require('mongoose');

const AdminsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

AdminsSchema.method('toJSON', function () {
    const { password, ...object } = this.toObject()//spread operator
    //no aparece password y mantiene el cuerpo del objeto
    //object.uid = ID;
    //asignar alias uid
    return object;
});
module.exports = model('Admins', AdminsSchema);