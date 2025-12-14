import express from 'express';
import webpush from 'web-push';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// 🔐 SUAS VAPID (essas já estão corretas)
webpush.setVapidDetails(
  'mailto:contato@clinicafisio.site',
  'BCHNShKsmBE9CVqvIdxfpjurjyw4abMfN8eOZaAhXSWQGOQur-9stycT7UoTjyAJ4EZaHavVDduebthYp8mxHzk',
  'EBjVt6VC1iwUAjp9XEbn6yED2oJQKUkXfgIQQlQaWMk'
);

app.get('/', (req, res) => {
  res.send('🚀 Push server online');
});

app.post('/send', async (req, res) => {
  const { endpoint, p256dh, auth, title, body } = req.body;

  try {
    await webpush.sendNotification(
      {
        endpoint,
        keys: { p256dh, auth }
      },
      JSON.stringify({
        title: title || 'Push',
        body: body || 'Mensagem'
      }),
      { TTL: 60 }
    );

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
