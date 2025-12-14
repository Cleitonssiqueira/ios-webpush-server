import express from "express";
import webpush from "web-push";

const app = express();

// 🔴 ESSENCIAL NO RAILWAY
const PORT = process.env.PORT || 3000;

app.use(express.json());

// health check (Railway precisa disso)
app.get("/", (req, res) => {
  res.status(200).send("🚀 iOS Web Push Server Online");
});

// exemplo de endpoint de push
app.post("/send", async (req, res) => {
  res.json({ ok: true, message: "endpoint funcionando" });
});

// 🔴 OBRIGATÓRIO
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server rodando na porta ${PORT}`);
});
