const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.setHeader("content-type" , "text/html")
  if (req.url === "/") {
    return res.end("Home Page");
  }
  if (req.url === "/about") {
    const filePath = path.resolve(__dirname, "about.html");
    const data = fs.readFileSync(filePath);

    console.log(data);

    return res.end(data);
  }

  res.statusCode = 404;
  res.end("Page not found");
});

const port = 3333;

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
