const express = require("express");
const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("📥 Webhook Event:", req.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("✅ Webhook server is running!");
});

app.listen(5000, () => console.log("🚀 Listening for JaaS events on port 5000"));
