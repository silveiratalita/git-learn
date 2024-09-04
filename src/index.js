const express = require("express");
const { router } = require("./router");
const server = express();

server.use(express.json());

server.use(router);
server.listen(3333, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Escola DNC conectada à porta 3333!");
});
