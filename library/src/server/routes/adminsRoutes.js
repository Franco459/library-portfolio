const { Router } = require('express');
const { getAdmins, createAdmin, updateAdmin, removeAdmin } = require('../controllers/adminsController');
const { validateInputs } = require('../middlewares/adminsValidations');
const { check } = require('express-validator');

const router = Router();
//get, put, post, delet
router.get('/admins', getAdmins);

router.delete('/admins/:id', removeAdmin);

router.post('/admins/', [
    check('name').not().isEmpty().withMessage('Nombre es obligatorio').not().isNumeric().withMessage('No se admiten numeros'),
    check('surname').not().isEmpty().withMessage('surname es obligatorio').not().isNumeric().withMessage('No se admiten numeros'),
    check('username').not().isEmpty().withMessage('username es obligatorio'),
    check('password').not().isEmpty().withMessage('password es obligatorio'),
    check('telephone').not().isEmpty().withMessage('telephone es obligatorio'),
    check('email').isEmail().withMessage('email es obligatorio'),
    validateInputs
], createAdmin);

router.put('/admins/:id', [
    check('name').not().isEmpty().withMessage('Nombre es obligatorio').not().isNumeric().withMessage('No se admiten numeros'),
    check('surname').not().isEmpty().withMessage('surname es obligatorio').not().isNumeric().withMessage('No se admiten numeros'),
    check('username').not().isEmpty().withMessage('username es obligatorio'),
    check('password').not().isEmpty().withMessage('password es obligatorio'),
    check('telephone').not().isEmpty().withMessage('telephone es obligatorio'),
    check('email').isEmail().withMessage('email es obligatorio'),
    validateInputs
], updateAdmin);


module.exports = router;