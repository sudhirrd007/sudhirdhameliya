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

module.exports = router;
