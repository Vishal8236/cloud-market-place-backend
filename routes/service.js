const express = require("express");
const router = express.Router();

const {
  createService, getCSPServices,
} = require("../controllers/service");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
// router.param("categoryId", getCategoryById);

//actual routers

//create
router.post(
  "/service/create/",
  isSignedIn,
  createService
);

//read
router.post(
  "/csp/services/", 
  isSignedIn,
  getCSPServices
);
// router.get("/categories", getAllCategory);

// //update
// router.put(
//   "/category/:categoryId/:userId",
//   isSignedIn,
//   isAuthenticated,
//   isAdmin,
//   updateCategory
// );

// //delete

// router.delete(
//   "/category/:categoryId/:userId",
//   isSignedIn,
//   isAuthenticated,
//   isAdmin,
//   removeCategory
// );

module.exports = router;