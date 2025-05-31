import express from "express";

// controllers
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "../controllers/userController.js";
// middlewares
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

export default router;
