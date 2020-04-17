const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/add-product', (req, res) => {
  // res.send(
  //   '<form action="/product" method="POST"><input type="text" name="title"/><button type ="submit">SUBMIT</button></form>'
  // );
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res) => {
  res.redirect('/');
});

module.exports = router;
