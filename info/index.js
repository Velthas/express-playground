// const http = require("http");
// const fs = require("fs");

const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

const URL = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
};

// Makes public folder available
app.use(express.static(path.join(__dirname, "public")));

app.get(URL.HOME, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"), logError);
});

app.get(URL.ABOUT, (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"), logError);
});

app.get(URL.CONTACT, (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"), logError);
});

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "404.html"), logError);
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at localhost:${process.env.PORT}`);
});

const logError = (err) => {
  console.error(err);
};

// const server = http.createServer(async (request, response) => {
//   const URL = {
//     HOME: "/",
//     ABOUT: "/about",
//     CONTACT: "/contact",
//   };

//   switch (request.url) {
//     case URL.HOME:
//       response.writeHead(200, { "content-type": "text/html" });
//       fs.createReadStream("index.html").pipe(response);
//       break;
//     case URL.ABOUT:
//       response.writeHead(200, { "content-type": "text/html" });
//       fs.createReadStream("about.html").pipe(response);
//       break;
//     case URL.CONTACT:
//       response.writeHead(200, { "content-type": "text/html" });
//       fs.createReadStream("contact-me.html").pipe(response);
//       break;
//     default:
//       response.writeHead(404, { "content-type": "text/html" });
//       fs.createReadStream("404.html").pipe(response);
//   }
// });

// server.listen(process.env.PORT);
