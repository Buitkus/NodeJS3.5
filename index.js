require("dotenv").config();
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();
app.use(express.json());

const {
  createAuthor,
  getAllAuthors,
  getAuthorById,
} = require("./controllers/authorController");

const { 
  createNewCourse,
  getAllCourses
} = require("./controllers/courseController");


app.post("/api/author", createAuthor);
app.get("/api/authors", getAllAuthors);
app.get("/api/author/:id", getAuthorById);

app.post("/api/course", createNewCourse);
app.get("/api/courses", getAllCourses);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
