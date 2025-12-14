import express from "express";

const app = express();

// 🚨 OBRIGATÓRIO no Railway
const PORT = process.env.PORT;

if (!PORT) {
  console.error("❌ PORT não definida pelo Railway");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.status(200).send("Servidor online 🚀");
});

// 🚨 NÃO FIXAR PORTA
app.listen(PORT, "0.0.0.0", () => {
  console.log("✅ Server rodando na porta", PORT);
});
