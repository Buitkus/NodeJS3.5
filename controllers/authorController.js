const Author = require("../models/Author");

// @DESC Create new author
// @route POST /api/author
// @access PUBLIC

const createAuthor = async (req, res) => {
  if (!req.body.name) res.status(404).send("Not found");

  const author = new Author({
    name: req.body.name,
    bio: req.body.bio,
    website: req.body.website,
  });

  const result = await author.save();
  res.status(200).send(result);
};

// @DESC Find all authors
// @route GET /api/author
// @access PUBLIC

const getAllAuthors = async (req, res) => {
  const result = await Author.find();
  res.send(result);
};

// @DESC get Author by ID
// @route GET /api/author/:id
// @access PUBLIC


const getAuthorById = async (req, res) => {
  const result = await Author.find({_id: req.params.id});
  res.send(result);
};

module.exports = {
  createAuthor,
  getAllAuthors,
  getAuthorById
};
