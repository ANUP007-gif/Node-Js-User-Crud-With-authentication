const { body, validationResult, param, query } = require('express-validator');
const User = require('../models/userModel');
const AppError = require('./appError');

exports.validator = {
  // Users Validators
  registerUser: [
    body('email').isEmail().withMessage('Please enter valid email.'),
    body('first_name').notEmpty().withMessage('First name can not be empty.'),
    body('last_name').notEmpty().withMessage('Last name can not be empty.'),
    body('password').notEmpty().withMessage('Password can not be empty.'),
    body('country_code').notEmpty().withMessage('Country code can not be empty.'),
    body('designation').notEmpty().withMessage('Designation code can not be empty.'),
    body('address').notEmpty().withMessage('Address code can not be empty.'),
    body('pincode').notEmpty().withMessage('Pincode code can not be empty.'),
    body('city').notEmpty().withMessage('City code can not be empty.'),
    body('state').notEmpty().withMessage('state code can not be empty.'),
    body('country_name').notEmpty().withMessage('Country Name code can not be empty.'),


    body('phone_number')
      .notEmpty()
      .isNumeric()
      .withMessage('Phone number must be number and can not be empty.'),
    body('role').custom((value) => {
      if (!['admin', 'user'].includes(value)) {
        return Promise.reject('Role value must be either admin or user.');
      } else {
        return true;
      }
    }),
  ],

  loginUser: [
    body('userName').notEmpty().withMessage('User name can not be empty.'),
    body('password').notEmpty().withMessage('Password can not be empty.'),
  ],

  updateUser: [
    body('password').custom((value) => {
      if (value === undefined) {
        return true;
      } else {
        return Promise.reject('Use change password api for password change.');
      }
    }),

    body('email').custom(async (value) => {
      if (value === undefined) {
        return true;
      }

      if (value === '') {
        return Promise.reject("Email can't be empty.");
      }

      const [user] = await User.findAll({
        where: { email: value },
        raw: true,
      });

      if (user) {
        return Promise.reject('Duplicate Email, Try another one.');
      } else {
        return true;
      }
    }),

    body('phone_number').custom(async (value) => {
      if (value === undefined) {
        return true;
      }

      if (value === '') {
        return Promise.reject("Phone number can't be empty.");
      }

      const [user] = await User.findAll({
        where: { phone_number: value },
        raw: true,
      });

      if (user) {
        return Promise.reject('Duplicate mobile number, Try another one.');
      } else {
        return true;
      }
    }),
  ],

  
  
};

exports.validateResponse = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const msg = errors
      .array()
      .map((err) => {
        return `${err.msg}`;
      })
      .join(', ');

    return res.status(400).json({ status: 'error', message: msg });
  }

  next();
};
