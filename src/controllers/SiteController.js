const Courses = require("../models/Course");

class SiteController{
  index(req, res, next){
    Courses.find({}).then(courses => {
    courses = courses.map(course => course.toObject());
    res.render('home', { courses });
    }).catch(next);
  }
}
module.exports = new SiteController;