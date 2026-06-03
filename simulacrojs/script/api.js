const express = require('express');
const router = express.Router();

router.get('/usuarios', (req, res) => {
  res.json({ mensaje: 'Lista de productos' });
});

module.exports = router;