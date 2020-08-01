const express = require('express');
const { body } = require('express-validator');
const authorize = require('../middlewares/authorizeAdmin');
const router = express.Router();

const adminController = require('../controllers/adminController');

//CREAR USUARIO ADMIN
router.post('/', [
  body('username', 'El usuario no puede ser nulo').notEmpty(),
  body('password', 'Password no puede ser nulo').notEmpty(),
  body('password', 'debe contener al menos un núnero').matches(/\d/),
  body('password', 'debe incluir de 8 a 32 caracteres').isLength({ min: 8, max: 32 }),
  ], adminController.createAdmin);

//LOGUEAR USUARIO ADMIN
router.post('/login', [
  body('username', 'El usuario no puede ser nulo').notEmpty(),
  body('password', 'Password no puede ser nulo').notEmpty()
  ], adminController.login);

//DESCONECTAR USUARIO ADMIN
router.get('/logout', authorize(["user","admin"]), adminController.logout);

module.exports = router;
