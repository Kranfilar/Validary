const Funcionario = require('../models/funcionario');

module.exports = {
    async criarFuncionario(req, res) {
        try {
            const funcionario = await Funcionario.create(req.body);
            res.status(201).json(funcionario);
        } catch (error) {
            res.status(400).json({ error: 'Não foi possível criar o funcionário.' });
        }
    },

    async listarFuncionarios(req, res) {
        try {
            const funcionarios = await Funcionario.find();
            res.json(funcionarios);
        } catch (error) {
            res.status(400).json({ error: 'Não foi possível listar os funcionários.' });
        }
    },

    async buscarFuncionario(req, res) {
        try {
            const funcionario = await Funcionario.findById(req.params.id);
            res.json(funcionario);
        } catch (error) {
            res.status(400).json({ error: 'Não foi possível encontrar o funcionário.' });
        }
    },

    async atualizarFuncionario(req, res) {
        try {
            const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(funcionario);
        } catch (error) {
            res.status(400).json({ error: 'Não foi possível atualizar o funcionário.' });
        }
    },

    async excluirFuncionario(req, res) {
        try {
            await Funcionario.findByIdAndDelete(req.params.id);
            res.json({ message: 'Funcionário excluído com sucesso.' });
        } catch (error) {
            res.status(400).json({ error: 'Não foi possível excluir o funcionário.' });
        }
    }
};
