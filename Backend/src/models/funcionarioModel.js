const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    setor: {
        type: String,
        required: true
    },
    funcoesPrincipais: {
        type: [String],
        required: true
    },
    funcoesSecundarias: {
        type: [String]
    },
    sistemasAcesso: {
        type: String
    },
    prontuario: {
        type: Number,
        required: true,
        unique: true
    },
    cargo: {
        type: String,
        required: true
    },
    postoTrabalho: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);
