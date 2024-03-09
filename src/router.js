const express = require('express'); //chamando o express

const userController = require('./controllers/userController'); //chamando o controller de usuário
const userMiddleware = require('./middlewares/userMiddleware'); //chamando o middleware de usuário
const { route } = require('./app');

const router = express.Router(); //instanciando o router

router.post('/user/cadastro', userController.cadastrarUsuario); // executando funcao buscarUsuarios do controller de usuário
router.post('/user/login', userController.buscarUsuario); // executando funcao  cadastrarUsuario do controller de usuário

module.exports = router; //exportando o router para ser usado em outro arquivo