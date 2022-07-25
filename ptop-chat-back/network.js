const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const DEFAULT_PORT = 3005;
const ROOT_NODE_ADDRESS = `http://localhost:${DEFAULT_PORT}`;

function rpc(pubsub) {
  app.get("/", (req, res) => {
    res.send("Login Successfully!!!");
  });

  app.post("/transaction", (req, res) => {
    const newTransaction = req.body;
      pubsub.broadcastMessage(newTransaction);

    res.json({ note: `Transaction send successfully` });
  });

  app.post("/login", (req, res) => {
    const loginDetails = req.body;
      pubsub.broadcastMessage(loginDetails);

    res.json({ note: `Login successfull` });
  });

 

}

app.listen(4000, () => {
    console.log(`listening at localhost: 4000}`);
  });