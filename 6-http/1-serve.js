const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(Object.keys(req))
  console.log(req.url);
  console.log(req.method);
  //   console.log(req.headers);

  res.setHeader("content-Type", "text/html");
  //   res.setHeader("content-Type", "application/json");

  //   res.statusCode = 500;

  //   const buf = Buffer.from("Leila Bakhshayesh")
  //   console.log(buf)

  const base64 = convert("Leila", "utf-8", "base64");
  
  console.log(base64)

  res.write("<h1>");
  res.write(base64 , "base64");
  res.write("</h1>");

  //   const user = { name: "Leila", family: "bakhshayesh" };

  res.end();
});

server.listen(3333, () => {
  console.log("Server is running on 3333");
});


function convert(text, from, to) {
  return Buffer.from(text, from).toString(to);
};

