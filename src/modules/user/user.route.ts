import express from "express";
import { userController } from "./user.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.get("/:id", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), userController.getMyProfile)
router.patch("/:userId", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), userController.updateMyProfile)


export const userRouter = router;