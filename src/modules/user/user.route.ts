import express from "express";
import { userController } from "./user.controller";

const router = express.Router()

router.get("/:id", userController.getMyProfile)
router.patch("/:userId", userController.updateMyProfile)


export const userRouter = router;