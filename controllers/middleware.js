
const User = require("../models/userModel");

const jwt = require("jsonwebtoken");

const catchAsync = require('../utility/catchAsync');
const AppError = require('../utility/appError');


exports.authenticate = catchAsync(async (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
  
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      where: { email: decode.email },
      raw: true,
    });
    
    if (!user) {
      return next(
        new AppError("User belongs to the token no longer available.", 400)
      );
    }

  
    req.user = user;
  
    next();
  });
  