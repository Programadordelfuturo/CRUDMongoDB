const userModels = require("../modules/user.models")

const getAll = async (req, res) => {
  userModels
    .find()
    .then((data) => res.json(data))
    .catch(error => res.json({ message: error.message }))
}

const getById = async (req, res) => {
  const { id } = req.params
  userModels
    .findById(id)
    .then((data) => res.json(data))
    .catch(error => res.json({ message: error.message }))
}

const postUser = async (req, res) => {
  const { name, age, email, sports } = req.body
  const user = new userModels({ name, age, email, sports })

  user
    .save()
    .then((data) => res.json(data))
    .catch(error => res.json({ message: error.message }))
}

const putUser = async (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;

  userModels
    .updateOne({ _id: id }, { name, age, email })
    .then((data) => res.json(data))
    .catch(error => res.json({ message: error.message }))
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  userModels
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

module.exports = {
  getAll,
  getById,
  postUser,
  putUser,
  deleteUser
}