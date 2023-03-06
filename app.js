const http = require("http");
const fs = require("fs");
const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("page/home.html", "utf-8", (err, data) => {
      console.log(data);
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.readFile("page/about.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/create-file") {
    res.writeHead(200, { "Content-type": "text/html" });
    const data = "<h1>Test file</h1>";
    fs.writeFile("temp/test.html", data, (err) => {
      if (err) throw err;
      res.write("File is created");
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    fs.readFile("page/404NotFound.html", "utf-8", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT);
