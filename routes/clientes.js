const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, nombre: 'Cliente Victor' },
    { id: 2, nombre: 'Cliente Tecsup' }
  ]);
});

module.exports = router;