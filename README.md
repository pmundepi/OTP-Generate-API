# OTP-Generate-API

This code is written in JavaScript and uses the Express framework to create a server. The server listens on port `4200` and has an API endpoint `/generateOTP` which generates a 6 digit OTP (One Time Password) using the generateOTP() function.
The `generateOTP()` function generates a random 6 digit number using the `Math.random()` function and returns it as a string. The server uses the CORS middleware to allow cross-origin requests.
You can use this code as a starting point to create your own server with an OTP generation API endpoint. 
You can modify the code to generate OTPs of different lengths or add additional functionality to the server.

# How To Use
* Clone this repository `git clone <repo link>`
* Run `npm install express.js` to install Express JS.
* Run `npm install cors` to install CORS.
* Check it out using `node server.js`.

## Usage

Visit [http://localhost:4200/generateOTP](http://localhost:4200/generateOTP) in your browser.

