const userModel = require('../models/userModel');

const buscarUsuario = async (request, response) => {
    const users = await userModel.buscarUsuario(request.body);
    return response.status(200).json(users);
};

const cadastrarUsuario = async (request, response) => {
    const cadastrando = await userModel.cadastrarUsuario(request.body);
    return response.status(200).json(cadastrando);
};



module.exports = {
    buscarUsuario,
    cadastrarUsuario,
};
