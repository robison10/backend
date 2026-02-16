const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ONLINE");
});

app.post("/login", (req, res) => {
  res.json({ success: true });
});

// 👇 PORTA HÍBRIDA (ESSA É A CHAVE)
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Rodando na porta:", PORT);
});
