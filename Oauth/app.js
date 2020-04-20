const express = require('express');
const authRoutes = require('./Routes/auth-routes');
const app = express();

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => console.log('Listening to Port 3000'));
