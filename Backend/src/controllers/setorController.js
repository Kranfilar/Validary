const Setor = require('../models/setor');

async function criarSetor(req, res) {
    const { nome } = req.body;

    try {
        const setor = await Setor.create({ nome });
        return res.json(setor);
    } catch (error) {
        return res.status(400).send({ error: 'Erro ao criar setor' });
    }
}

module.exports = { criarSetor };