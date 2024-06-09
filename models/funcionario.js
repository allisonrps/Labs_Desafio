const mongoose = require('mongoose');

const Funcionario = mongoose.model('funcionario', {
    nome: String,
    cargo: String,
    salario: Number,
    contratado: Boolean
});

module.exports = Funcionario;