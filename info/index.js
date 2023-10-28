const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const server = http.createServer(async (request, response) => {
  const URL = {
    HOME: "/",
    ABOUT: "/about",
    CONTACT: "/contact",
  };

  switch (request.url) {
    case URL.HOME:
      response.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("index.html").pipe(response);
      break;
    case URL.ABOUT:
      response.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("about.html").pipe(response);
      break;
    case URL.CONTACT:
      response.writeHead(200, { "content-type": "text/html" });
      fs.createReadStream("contact-me.html").pipe(response);
      break;
    default:
      response.writeHead(404, { "content-type": "text/html" });
      fs.createReadStream("404.html").pipe(response);
  }
});

server.listen(process.env.PORT);
console.log(`Server running at localhost:${process.env.PORT}`)
