const express = require('express')
const cors = require('cors');
const app = express();
const port = 4200;
app.use(express.json());
app.use(cors());

function generateOTP() {
  genOTP = '';
  const digits = '0123456789';
  for (let i = 0; i < 6; i++) {
    genOTP += digits[Math.floor(Math.random() * 10)];
  }
  return genOTP;
}

//API Path: http://localhost:4200/generateOTP
app.get('/generateOTP', (req, res) => {
    try {
      res.send(generateOTP());
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});