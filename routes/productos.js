const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 101, producto: 'Laptop Asus' },
    { id: 102, producto: 'Mouse Razer' }
  ]);
});

module.exports = router;