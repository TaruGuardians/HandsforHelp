//dependancies
const express = require('express');
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const { static, response } = require('express')
const bodyParser = require('body-parser')
const request=require('request');
const path=require('path');
const { Console } = require('console');

const app = express()
const port = process.env.PORT || 3000
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c4eb5895ea7da6",
      pass: "2510a9a992be0b"
    }
  });

//paths
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../views');
app.use(static(publicPath)) //for static css and js

app.use(bodyParser.urlencoded({ extended: false })) //to parse body string

//view engine
app.set("view engine","ejs"); //for dynamic content
app.set("views",viewsPath);

app.get('/', (req, res)=>{
    res.render("index");
})

app.get('/bihar',(req,res)=>{
    res.render("bihar");
})

app.get('/jharkhand',(req,res)=>{
    res.render("jharkhand");
})

app.get('/west-bengal',(req,res)=>{
    res.render("west-bengal");
})

app.route('/contact',(req,res)=>{
    res.sendFile("contact");
})

app.get('/contact',(req,res)=>{
    res.render("contact");
})

transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post("/send", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
      console.log(fields);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
      const mail = {
        from: data.name,
        to: "taruguardians@gmail.com",
        subject: data.subject,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong.");
        } else {
          res.status(200).send("Email successfully sent to recipient!");
        }
      });
    });
  });
  

app.listen(port, () => console.log(`Server is running on http://localhost:`+port))