import { body } from "express-validator";

export const updateHeroValidation = [
  body("portfolio_title")
    .trim()
    .notEmpty()
    .withMessage("Portfolio title is required")
    .isLength({ max: 100 })
    .withMessage("Portfolio title must be 100 characters or fewer"),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name must be 100 characters or fewer"),
  body("role")
    .trim()
    .notEmpty()
    .withMessage("Role is required")
    .isLength({ max: 150 })
    .withMessage("Role must be 150 characters or fewer"),
  body("description")
    .optional({ nullable: true })
    .trim()
    .isString()
    .withMessage("Description must be text"),
  body("hero_image")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isURL({ require_protocol: true })
    .withMessage("Hero image must be a valid URL"),
];
