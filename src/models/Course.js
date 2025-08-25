const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
  title: {type: String, default: ''},
  description: {type: String, default: ''},
  image: {type: String, default: ''},
  duration: {type: Number, default: 0},
  createdAt: { type: Date, default: Date.now }
});
//Course ten collection
const Courses = mongoose.model('Courses', CourseSchema);
console.log("Course Model", Courses)
module.exports = Courses;
