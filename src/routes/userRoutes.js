const express = require('express');
const router = express.Router();
const { getAll, getById, postUser, putUser, deleteUser } = require('../controllers/user.controllers')

router.get('/user', getAll);

router.get('/user/:id', getById);

router.post('/user', postUser);

router.put('/user/:id', putUser);

router.delete('/user/:id', deleteUser)



module.exports = router;