import { body } from "express-validator";

export const updateAboutValidation = [
  body("heading")
    .trim()
    .notEmpty()
    .withMessage("Heading is required")
    .isLength({ max: 150 })
    .withMessage("Heading must be 150 characters or fewer"),
  body("subtitle")
    .trim()
    .notEmpty()
    .withMessage("Subtitle is required")
    .isLength({ max: 200 })
    .withMessage("Subtitle must be 200 characters or fewer"),
  body("content")
    .trim()
    .notEmpty()
    .withMessage("Content is required"),
];
