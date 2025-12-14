import express from "express";
import webpush from "web-push";

const app = express();
app.use(express.json());

// 🔴 OBRIGATÓRIO NO RAILWAY
const PORT = process.env.PORT || 3000;

/* =========================
   TESTE DE VIDA (ROOT)
========================= */
app.get("/", (req, res) => {
  res.status(200).send("🚀 iOS Web Push Server ONLINE");
});

/* =========================
   EXEMPLO DE PUSH (TESTE)
========================= */
app.post("/send", async (req, res) => {
  try {
    const { subscription, payload } = req.body;

    if (!subscription) {
      return res.status(400).json({ error: "No subscription" });
    }

    await webpush.sendNotification(
      subscription,
      JSON.stringify(payload || { title: "Teste", body: "Push OK 🚀" })
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
