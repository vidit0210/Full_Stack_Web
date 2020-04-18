const express = require('expres');
const app = express();

app.use(express.static());
app.listen(3000);
