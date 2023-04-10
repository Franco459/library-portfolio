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
    username: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
},
    {
        timestamps: true
    });

AdminsSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password; // Eliminar la contraseña del objeto JSON
    return obj;
};

module.exports = model('Admins', AdminsSchema);
