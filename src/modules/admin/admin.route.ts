import express from "express";
import { AdminController } from "./admin.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.get("/users", auth(UserRole.ADMIN), AdminController.getAllUsers)
router.patch("/users/:id", auth(UserRole.ADMIN), AdminController.updateUserStatus)

export const adminRoute = router