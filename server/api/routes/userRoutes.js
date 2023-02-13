const express = require("express");
const router = express.Router();

// import controller
const {register, login, getUsers, rentScooter} = require("../controller/userController");

// @desc    Register a new user
router.route("/register").post(register);

// @desc    Login a user
router.route("/login").post(login);

// @desc    Get all users
router.route("/allUsers").get(getUsers);

// @desc    Rent a scooter
router.route("/rent").post(rentScooter);


// export route file
module.exports = router;
