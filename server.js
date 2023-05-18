const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/data", (req, res) => {
 const data = req.body;
 console.log(data)
 return res.json({message: "Hi"})
});

app.listen(port, () => {
  console.log("server is listening");
});