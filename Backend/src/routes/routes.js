const express = require('express');
const router = express.Router();
const Setor = require('../models/setorModel');
const Funcionario = require('../models/funcionarioModel');

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/me', authMiddleware, (req, res) => {
    res.json(req.user);
});

// rota para cadastrar um Setor
router.post('/setor', async (req, res) => {
    try {
        const setor = await Setor.create(req.body);
        res.status(201).json(setor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para cadastrar um Funcionário
router.post('/funcionario', async (req, res) => {
    try {
        const funcionario = await Funcionario.create(req.body);
        res.status(201).json(funcionario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para listar todos os setores
router.get('/setor', async (req, res) => {
    try {
        const setores = await Setor.find();
        res.status(200).json(setores);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para listar um setor específico
router.get('/setor/:id', async (req, res) => {
    try {
        const setor = await Setor.findById(req.params.id);
        res.status(200).json(setor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para listar todos os funcionários de um setor
router.get('/setor/:setor/funcionarios', async (req, res) => {
    try {
        const funcionarios = await Funcionario.find({ "setor": req.params.setor });
        res.status(200).json(funcionarios);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para listar todos os funcionários
router.get('/funcionario', async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        res.status(200).json(funcionarios);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para listar um funcionário específico
router.get('/funcionario/:id', async (req, res) => {
    try {
        const funcionario = await Funcionario.findById(req.params.id);
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para atualizar um Funcionário
router.put('/funcionario/:id', async (req, res) => {
    try {
        const funcionario = await Funcionario.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    nome: req.body.nome,
                    setor: req.body.setor,
                    funcoes_principais: req.body.funcoes_principais,
                    funcoes_secundarias: req.body.funcoes_secundarias,
                    sistemas: req.body.sistemas,
                    prontuario: req.body.prontuario
                }
            },
            { new: true }
        );
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// rota para deletar um Funcionário
router.delete('/funcionario/:id', async (req, res) => {
    try {
        const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;



