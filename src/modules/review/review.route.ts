import express from "express";
import { ReviewController } from "./review.controller";
import auth, { UserRole } from "../../middlewares/auth";


const router = express.Router()

router.post("/", auth(UserRole.CUSTOMER), ReviewController.createReview)
router.get("/", auth(UserRole.CUSTOMER), ReviewController.getAllReviews)

export const reviewRouter = router