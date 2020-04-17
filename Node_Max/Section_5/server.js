//Npm modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Custom Routes
const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
  res.send('<h1>Page Not found</h1>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT} for requests!`);
});
