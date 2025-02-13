import { body } from "express-validator";

const registerValidation = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  body("email").isEmail().withMessage("Must be a valid email"),
  body("fullName").trim().notEmpty().withMessage("Full name is required"),
  body("gender")
    .isIn(["male", "female", "other"])
    .withMessage("Invalid gender"),
  body("dateOfBirth").isISO8601().withMessage("Invalid date format"),
  body("country").trim().notEmpty().withMessage("Country is required"),
];

const loginValidation = [
  body("username").trim().notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

export default {
  registerValidation,
  loginValidation,
};