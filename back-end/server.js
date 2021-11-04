#!/usr/bin/env node
const server = require("./app.js") // load up the web server
const axios = require("axios") // middleware for making requests to APIs
// use cors to bypass chrome error
const cors = require('cors')
server.use(cors())

const port = 3001 // the port to listen to for incoming requests
// call express's listen function to start listening to the port

const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
// route handling
server.get('/usermenu', (req, res, next) => {
  axios
      .get('https://my.api.mockaroo.com/restaurant_info.json?key=4aedac00')
      .then(apiRes => res.json(apiRes.data))
      .catch(err => next(err))
})

server.post("/register-submit", function(req, res){
  if(req.body.first_name && req.body.last_name && req.body.email && req.body.password && req.body.repassword){
  const data = {
    status: "true",
    message: "The data has been entered to the database",
    your_data: {
      name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      repassword: req.body.repassword,
    },
  }
 console.log((data))
  res.status(200);
  res.redirect("http://localhost:3000/signin");
  }
  else{
    res.status(400);
    res.redirect("http://localhost:3000/register");
  }
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}
// module.exports = {
//   close: close,
// }
module.exports = server
