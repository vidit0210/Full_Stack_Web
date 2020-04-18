const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const handlers = require('./lib/handlers');

const httpServer = http.createServer((req, res) => {
  unifiedServer(req, res);
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});

//All the server logic Unified
let unifiedServer = (req, res) => {
  //Parsing the Url
  let parsedUrl = url.parse(req.url, true);

  //Getting The Path Name
  let { pathname } = parsedUrl;
  //trimming the White space
  let trimmedPath = pathname.replace(/^\/|\/$/g, '');
  //Getting the Query
  let { query } = parsedUrl;
  //Getting The Http Mathod
  let { method } = req;
  method = method.toLowerCase();
  //Get Headers as an Object
  let { headers } = req;
  //Get the Payload
  let decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', (data) => {
    buffer += decoder.write(data);
  });
  req.on('end', () => {
    buffer += decoder.end();
    //Choose the handler request should go to
    let chosenHandler =
      typeof router[trimmedPath] !== 'undefined'
        ? router[trimmedPath]
        : handlers.notFound;

    let data = {
      trimmedPath: trimmedPath,
      queryStringObject: query,
      method: method,
      headers: headers,
      payload: buffer,
    };

    //Route the request to the handler
    chosenHandler(data, (statusCode, payload) => {
      statusCode = typeof statusCode == 'number' ? statusCode : 200;
      payload = typeof payload == 'object' ? payload : {};
      let payLoadString = JSON.stringify(payload);
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(payLoadString);
      console.log('Returning The response ', statusCode, payLoadString);
    });
  });
};

//Defining a router

let router = {
  ping: handlers.ping,
  users: handlers.users,
};
