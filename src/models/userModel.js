const connection = require('./connection');

const buscarUsuario = async (info) => { //criando uma funcao assincrona
    const { USER_EMAIL, USER_PASSWORD } = info; //desestruturando o objeto info
    const [usuario] = await connection.execute('select USER_ID, USER_EMAIL, USER_NICKNAME FROM USER_PROFILE WHERE USER_EMAIL = ? and USER_PASSWORD = SHA2(?, 224)', [USER_EMAIL, USER_PASSWORD]); //executando a query e armazenando o primeiro array do retorno
    console.log(usuario)
    return usuario; //retornando o usuario
};


const cadastrarUsuario = async (infos) => {
    const {USER_NICKNAME, USER_EMAIL, USER_PASSWORD, USER_COUNTRY, USER_BIRTH} = infos; //desestruturando o objeto infos
    const query = 'INSERT INTO USER_PROFILE (USER_NICKNAME, USER_EMAIL, USER_PASSWORD, USER_COUNTRY, USER_BIRTH) VALUES (?,?,SHA2(?, 224),?, ?)'; //criando a query
    const values = [USER_NICKNAME, USER_EMAIL, USER_PASSWORD, USER_COUNTRY, USER_BIRTH]; //criando o array de valores
    const [cadastrando] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    const id_user = cadastrando.insertId; //pegando o id do usuário cadastrado
    console.log(id_user)
    return id_user; //retornando o id do usuário cadastrado
};



module.exports = {
    buscarUsuario,
    cadastrarUsuario,
};

