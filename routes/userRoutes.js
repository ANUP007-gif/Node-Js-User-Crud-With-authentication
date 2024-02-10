const express = require('express');
const { validator, validateResponse } = require('../utility/validator');
const userController = require('../controllers/userController');

const middleware = require('../controllers/middleware')



const router = express.Router();

router.post('/register', ...validator.registerUser, validateResponse, userController.registerUser);
router.post('/login', ...validator.loginUser, validateResponse, userController.loginUser);

router
  .route('/')
  .get(
    userController.getAllUsers
  );

router
  .route('/:id')
  .get(
  
    userController.getUser
  )
  .put(
    userController.updateUser
  )
  .delete(
    middleware.authenticate,
    userController.deleteUser
  );

module.exports = router;
