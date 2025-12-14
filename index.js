import express from "express";

const app = express();
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Servidor Express funcionando 🚀"
  });
});

// 🚨 PORTA CORRETA PARA RAILWAY
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});