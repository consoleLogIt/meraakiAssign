const express = require('express');
const router = express.Router();
const passport  = require('passport');
const authController = require("../../controllers/api/auth");



router.post('/sign-in', authController.signIn);
router.post('/create-user', authController.createUser);
router.patch('/update-password',passport.authenticate('jwt',{session:false}), authController.updatePassword);
router.patch('/update-username',passport.authenticate('jwt',{session:false}), authController.updateUsername);

module.exports = router;