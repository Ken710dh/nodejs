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
  create(req, res, next){
    res.render("createCourse");
  }
  async store(req, res, next){
    const courseData = req.body;
    try {
      await Courses.create(courseData);
      res.redirect("/site");
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new CourseController;