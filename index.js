const express = require("express");
const app = express();
app.use(express.json());

const events = []; // ⬅️ Array تخزن كل الأحداث

app.post("/webhook", (req, res) => {
  const event = req.body.event || "unknown-event";
  const time = new Date().toISOString();

  const log = {
    time,
    event,
    data: req.body
  };

  events.push(log); // ⬅️ حفظ الحدث

  console.log("📥 Webhook Event:", log);
  res.sendStatus(200);
});

// ✅ API تقدر Android تطلبها
app.get("/events", (req, res) => {
  res.json(events);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`));
