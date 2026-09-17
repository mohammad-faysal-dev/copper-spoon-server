import express from "express";
import { userController } from "./user.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.get("/:id", auth(UserRole.USER), userController.getMyProfile)
router.patch("/:userId", auth(UserRole.USER), userController.updateMyProfile)


export const userRouter = router;