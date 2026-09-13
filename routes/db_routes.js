const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/clientes', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM clientes');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/productos', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM productos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;