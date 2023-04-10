const { response } = require('express');
const { validationResult } = require('express-validator');

const validateInputs = (req, res = response, next) => {
    const result = validationResult( req );
    if(!result.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors_: result.mapped()
        })
    }
    next();
}

module.exports = {
    validateInputs
}