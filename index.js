// index.js
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ✅ Railway geralmente usa porta 3000 por padrão
const PORT = process.env.PORT || 3000;

// Rota de teste OBRIGATÓRIA para Railway
app.get('/', (req, res) => {
  res.json({ 
    status: 'online',
    service: 'Web Push Server',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Rota de health check (IMPORTANTE para Railway)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Suas outras rotas aqui...
app.post('/api/save-subscription', (req, res) => {
  // seu código
});

app.post('/api/send-notification', async (req, res) => {
  // seu código
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acessível em: http://0.0.0.0:${PORT}`);
});
