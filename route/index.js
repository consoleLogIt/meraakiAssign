const express = require('express');
const router = express.Router();

const usersContoller = require("../controllers/api/usersController");

router.use('/users',require('./users'))

router.get('/all-users',usersContoller.getAllUsers);
router.get('/:id',usersContoller.getUser);



module.exports = router;