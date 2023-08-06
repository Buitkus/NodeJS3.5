const Course = require("../models/Course");

// @DESC Create new Course
// @route POST /api/course
// @access PUBLIC

const createNewCourse = async (req, res) => {
  if (!req.body.name) res.status(404).send("Not found");

  const course = new Course({
    name: req.body.name,
    description: req.body.description,
    author: req.body.author,
  });

  const result = await course.save();

  res.status(200).send(result);
};

// @desc get all Courses with Authors
// @route GET /api/courses
// @access PUBLIC

const getAllCourses = async (req, res) =>{
  const result = await Course
  .find()
  .populate( 'author', 'name -_id') 
  res.send(result);
}


module.exports = {
  createNewCourse,
  getAllCourses
};
