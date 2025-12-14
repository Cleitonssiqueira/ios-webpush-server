import express from 'express';

const app = express();

// Railway fornece a porta automaticamente
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Server is running on Railway!');
});

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
