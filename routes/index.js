var express = require('express');
var router = express.Router();


var homeData = {
  facebook: "https://www.facebook.com/sudhirdhameliya007",
  linkedin: "https://www.linkedin.com/in/sudhir-dhameliya-797959134",
  gmail: "mailto:sudhir007@gmail.com",
  github: "https://github.com/sudhirrd007",
  instagram: "https://www.instagram.com/sudhir_dhameliya_007/"
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', homeData);
});


var aboutData = {
  name: "Sudhir Dhameliya",
  birthdate: "27 March 1998",
  mobile: "+226 899 0315",
  email: "sudhir007@gmail.com",
  address: "Regina Street, Waterloo, Canada",
  html: "95%",
  css: "95%",
  python: "85%",
  javascript: "95%",
  csharp: "80%",
  java: "90%"
}
router.get("/about", function(req, res, next) {
  res.render('about', aboutData);
});


module.exports = router;
