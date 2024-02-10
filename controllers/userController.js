const User = require("../models/userModel");
const { Op } = require('sequelize');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const catchAsync = require('../utility/catchAsync');
const AppError = require('../utility/appError');
const apiFeature = require('../utility/apiFeature');


exports.registerUser = catchAsync(async (req, res) => {
  req.transaction = await sequelize.transaction();

  try {
    req.body.password = await bcrypt.hash(
      req.body.password,
      Number(process.env.BCRYPT_SALT)
    );


    let data = await User.create(req.body, {
      transaction: req.transaction,
      raw: true,
    });


    await req.transaction.commit();

    res.status(200).json({
      status: "success",
      message: "User registered successfully.",
    });
  } catch (error) {

    // Check if the error is a Sequelize validation error
    if (error.name === "SequelizeValidationError") {
      // Check if it's a unique constraint violation
      if (error.errors.some((err) => err.type === "unique violation")) {
        res.status(400).json({
          status: "error",
          message: "Email address or Phone Number is already in use.",
        });
      } else {
        // Handle other validation errors
        res.status(400).json({
          status: "error",
          message: "Validation error(s) occurred.",
          errors: error.errors.map((err) => ({
            field: err.path,
            message: err.message,
          })),
        });
      }
    } else if (error.name === "SequelizeUniqueConstraintError") {
      // Handle specific unique constraint error
      res.status(400).json({
        status: "error",
        message: "Email address or phone number already  is already in use.",
      });
    } else {
      // Handle other types of errors
      res.status(500).json({
        status: "error",
        message: "Internal server error.",
        error: error.message, // Include the error message in the response
      });
    }

    // Rollback the transaction in case of an error
    await req.transaction.rollback();
  }
});

exports.loginUser = catchAsync(async (req, res, next) => {
  const {
    userName,
    password,

  } = req.body;

  req.transaction = await sequelize.transaction();
  console.log("Checking user in DB in login");
  const user = await User.findOne({
    where: { [Op.or]: { email: userName, phone_number: userName } },
    raw: true,
  });
  console.log("Checked user in DB in login");
  if (
    !user 
  ) {
    return next(new AppError("User does not exists.", 400));
  }

  

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return next(new AppError("Incorrect password.", 400));
    }
  

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.first_name,
      first_name: user.first_name,
      last_name: user.last_name,
      createdAt: user.createdAt,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE_IN,
    }
  );

  delete user["password"];

  const data = {
    ...user,
    token,
  };

  req.transaction.commit();

  res.status(200).json({ status: "success", data });
});



exports.getAllUsers = catchAsync(async (req, res, next) => {
  const { where, limit, order } = apiFeature(req, 'user');

  const users = await User.findAndCountAll({
    where,

    ...limit,
    order,
    distinct: true,
    // raw: true,
  });

  const activeUsers = await User.count({
    where: {
      active_status: 1,
    },
  });
  const inActiveUsers = await User.count({
    where: {
      active_status: 0,
    },
  });

  res.status(200).json({
    status: 'success',
    result: users.count,
    activeUsers: activeUsers,
    inActiveUsers: inActiveUsers,
    data: users.rows,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findByPk(id);

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  res.status(200).json({ status: 'success', data: user });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;



  const [updatedUser] = await User.update(req.body, { where: { id } });

  if (!updatedUser) {
    return next(new AppError('User not updated', 400));
  }

  res.status(200).json({ status: 'success', message: 'User updated successfully' });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  req.transaction = await sequelize.transaction();

  const isUser = await User.findOne({
    where: {
      id,
    },
  });

  if (!isUser) {
    return next(new AppError('User not found', 404));
  }

  if (isUser.role === 'admin') {
    return next(new AppError('You can not delete admin', 400));
  }


  const deletedUser = await User.destroy({ where: { id }, transaction: req.transaction });

  if (!deletedUser) {
    return next(new AppError('User not deleted', 400));
  }

  req.transaction.commit();

  res.status(200).json({ status: 'success', message: 'User deleted successfully' });
});
