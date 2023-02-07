const express = require("express");
const router = express.Router();

// import controller
const {register, login, getUsers} = require("../controller/adminController");

// @desc    Register a new admin
router.route("/register").post(register);

// @desc    Login a admin
router.route("/login").post(login);

// @desc    Get all admins
router.route("/allAdmins").get(getUsers);


// export route file
module.exports = router;
