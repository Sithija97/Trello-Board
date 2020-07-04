const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //routes
  let path = './view/';
  switch (req.url) {
    case '/':
        path += 'index.html';
        break;
    case '/about':
        path += 'about.html';
        break;
    default:
        path += '404.html';
        break;
  }

  //set header type
  res.setHeader("Content-Type", "text/html");

  //sending html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("listening");
});
