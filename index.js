import express from "express";

const app = express();

// middleware básico
app.use(express.json());

// rota obrigatória
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// 🚨 PORTA DO RAILWAY (NÃO MEXER)
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor escutando na porta:", PORT);
});