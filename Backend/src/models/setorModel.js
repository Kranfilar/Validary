const mongoose = require('mongoose');

const SetorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    analistas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario'
    }]
});

module.exports = mongoose.model('Setor', SetorSchema);