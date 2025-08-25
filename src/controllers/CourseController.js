const Courses = require("../models/Course");

class CourseController{
  show(req, res, next){
    const course_query = req.params.slug;
    console.log("Course Query", course_query);
    Courses.findOne({ slug: course_query }).then(course => {
      if (!course) return next();
      res.render("detailCourse", { course: course.toObject() });
      console.log("Course", course)
    }).catch(next);
  }
}
module.exports = new CourseController;