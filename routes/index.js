var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/readData', function(req, res, next) {
  var userData = req.body
  console.log(req.body);

  const parentEmail = userData.parent_email
  const parentName = userData.parent_name
  const parentMobile = userData.parent_email
  const kidsName = userData.kids_name
  const kidsGrade = userData.kids_grade

  const studentData = {
    parent_email: parentEmail,
    parent_name: parentName,
    parent_mobile: parentMobile,
    kids_name: kidsName,
    kids_grade: kidsGrade
  }

  res.render('index', { title: 'Express' });
});

module.exports = router;
