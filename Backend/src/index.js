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
const authRoutes = require('./routes/routes.js');
const userRoutes = require('./routes/routes.js');
const setorRoutes = require('./routes/routes.js');
const funcionarioRoutes = require('./routes/routes.js');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/setor', setorRoutes);
app.use('/api/funcionario', funcionarioRoutes);

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
