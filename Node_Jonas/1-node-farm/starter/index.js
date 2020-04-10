const fs = require('fs');
const http = require('http');
const url = require('url');

// const buffer = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(buffer);

// const res = `This is what we know about Avocado ${buffer}`;

// fs.writeFileSync('./txt/output.txt', res);
// console.log('File Written');

// //Async Task
// const data = fs.readFile('./txt/start.txt', 'utf-8', (err, res) => {
//   console.log(res);
// });

//---Server Code---
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == '/' || pathName == '/overview') {
    res.end('This is the Overview');
  }
  if (pathName == '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(data);
    });
  }
  res.end('Hello from the Server');
});

server.listen(8000, () => {
  console.log('Listening to Port 8000');
});
