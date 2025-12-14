import express from "express";

const app = express();

// rota de teste (OBRIGATÓRIA)
app.get("/", (req, res) => {
  res.send("🚀 iOS Web Push Server ONLINE");
});

// Railway fornece a porta via variável de ambiente
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
