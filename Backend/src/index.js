const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Configurações de Middleware
app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Configuração das rotas
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const setorRoutes = require('./routes/setor.routes');
const funcionarioRoutes = require('./routes/funcionario.routes');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/setor', setorRoutes);
app.use('/funcionario', funcionarioRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
