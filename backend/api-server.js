const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

const memos = [];

app.use(bodyParser.json());

app.get('/api/memos', (req, res) => {
  res.send(memos)
})
app.post("/api/memos", (req,res) => {
    // console.log(req.body)
    memos.push(req.body.content);
    res.send(memos);
});
app.put("/api/memos/:idx", (req,res) => {
  memos[req.params.idx] = req.body.content;
  res.send(memos);
});
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})