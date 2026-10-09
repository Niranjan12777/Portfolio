import { body, param } from "express-validator";

export const projectIdValidation = [
  param("id")
    .isInt({ min: 1 })
    .withMessage("Project id must be a positive number"),
];

export const projectBodyValidation = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 255 })
    .withMessage("Title must be 255 characters or fewer"),
  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),
  body("github_url")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isURL({ require_protocol: true })
    .withMessage("GitHub URL must be a valid URL"),
  body("live_url")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .isURL({ require_protocol: true })
    .withMessage("Live URL must be a valid URL"),
  body("image_url")
    .optional({ nullable: true, checkFalsy: true })
    .trim()
    .custom((value) => {
      const isAbsoluteUrl = /https?:\/\/./i.test(value);
      const isUploadPath = /^\/uploads\/projects\/[^/]+$/i.test(value);

      if (isAbsoluteUrl || isUploadPath) {
        return true;
      }

      throw new Error("Image URL must be a valid URL or project upload path");
    }),
  body("featured")
    .optional()
    .isBoolean()
    .withMessage("Featured must be true or false")
    .toBoolean(),
];
