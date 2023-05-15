const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ requestedData: { username, password } });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
