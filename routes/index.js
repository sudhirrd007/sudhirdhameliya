var express = require('express');
var router = express.Router();


var homeData = {
  facebook: "https://www.facebook.com/sudhirdhameliya007",
  linkedin: "https://www.linkedin.com/in/sudhir-dhameliya-797959134",
  gmail: "mailto:sudhir007@gmail.com",
  github: "https://github.com/sudhirrd007",
  instagram: "https://www.instagram.com/sudhir_dhameliya_007/"
}
// home page ---------------------------------------------
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
// about page ----------------------------------------------
router.get("/about", function(req, res, next) {
  res.render('about', aboutData);
});


var projectsData = {
  proj1: "https://github.com/sudhirrd007/Weather_APP_Django",
  proj2: "https://github.com/sudhirrd007/Amazon_Food_Review_Prediction",
  proj3: "https://github.com/sudhirrd007/LeetCode-scraper",
  proj4: "https://www.kaggle.com/sudhirrd007/diabetes-prediction-using-only-knn-92-8"
}
// projects page ------------------------------------------
router.get("/projects", function(req, res, next) {
  res.render('projects', projectsData);
});


// contact page --------------------------------------------
router.get("/contact", function(req, res, next) {
  res.render('contact');
});


module.exports = router;