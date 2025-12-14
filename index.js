import express from "express";
import webpush from "web-push";

const app = express();
app.use(express.json());

// 🔑 VAPID KEYS (vamos gerar depois)
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;

webpush.setVapidDetails(
  "mailto:admin@seusite.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

// 🔍 Health check (Railway usa isso)
app.get("/", (req, res) => {
  res.json({ status: "OK", message: "Servidor Web Push ativo 🚀" });
});

// 📥 Endpoint para enviar push
app.post("/send", async (req, res) => {
  const { subscription, payload } = req.body;

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify(payload)
    );
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao enviar push" });
  }
});

// 🚪 PORTA DINÂMICA (OBRIGATÓRIO NO RAILWAY)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server rodando na porta ${PORT}`);
});
