const http = require("http");

const server = http.createServer((req, res) => {
  res.write('Hello word');
  res.end()
});
const PORT = 4000;
server.listen(PORT);
console.log(`Server is running in localhost:${PORT}`);

// const Circle = require('./circle')

// const cir = new Circle()


// console.log(cir.area(4));
// console.log(cir.circunference(2));

 