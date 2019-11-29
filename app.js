const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get('/',(req, res)=>{
    res.render('index');
  });
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server Started! @port: " + port);
});