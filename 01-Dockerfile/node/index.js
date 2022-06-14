const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// TO VIEW ALL IMAGES
// docker images

// TO REMOVE AN IMAGE
// docker image rm <image-id>

// TO BUILD AN IMAGE
// docker build . -t nodeapp

// RUN A CONTAINER OFF AN IMAGE
// docker run --name my-node-app -d nodeapp

// PORT MAPPING
// docker run --name my-node-app -d -p 3000:3000 nodeapp

// VIEW ALL CONTAINERS
// docker ps

// STOP OR KILL
// docker (stop/kill) <container-name>

// REMOVE CONTAINER
// docker rm <container-name>
