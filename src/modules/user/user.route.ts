import express from "express";
import { userController } from "./user.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.get("/:id", auth(UserRole.CUSTOMER), userController.getMyProfile)
router.patch("/:userId", auth(UserRole.CUSTOMER), userController.updateMyProfile)


export const userRouter = router;