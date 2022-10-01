const express = require("express");
const fs = require("fs");

const app = express();
app.set('view engine', 'ejs');

app.listen(4000);

const date = new Date();
app.use((req,res,next)=> {
  if (
    date.getHours() > 9 &&
    date.getHours() < 17 &&
    date.getDay() > 0 &&
    date.getDay() < 6
  ) {
    next();
  }else {
    res.send('<h1>Sorry .. This web application is only available during Monday to Friday, from 9 to 17</h1>')
  }  
})

app.get("/", (req, res) => {
  res.status(200).render("Homepage.ejs", {title: "Homepage"});
});
app.get("/our-services", (req, res) => {
  res.status(200).render("OurServices.ejs",{title: "OurServices"});
});
app.get("/contact-us", (req, res) => {
  res.status(200).render("Contactus.ejs",{title: "ContactUs"});
});
app.use((req, res) => {
  res.status(404).render("404.ejs",{title: "404"});
});
