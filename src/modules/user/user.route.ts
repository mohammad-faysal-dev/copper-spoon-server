import express from "express";
import { userController } from "./user.controller";

const router = express.Router()

router.get("/:id", userController.getMyProfile)


export const userRouter = router;