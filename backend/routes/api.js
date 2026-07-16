const express = require("express");

const router = express.Router();

// GET /api/message
router.get("/message", (req, res) => {
  res.send("Hello from Express Backend!");
});

// GET /api/users
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);
});

// POST /api/echo
router.post("/echo", (req, res) => {
  const { text } = req.body;

  res.json({
    echo: text,
  });
});

module.exports = router;