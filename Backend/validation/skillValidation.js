import { body, param } from "express-validator";

export const skillIdValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Skill id must be a positive number"),
];

export const skillBodyValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Skill name is required")
    .isLength({ max: 100 })
    .withMessage("Skill name must be 100 characters or fewer"),
];
