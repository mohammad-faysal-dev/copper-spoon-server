import express from "express";
import { ReviewController } from "./review.controller";
import auth, { UserRole } from "../../middlewares/auth";


const router = express.Router()

router.get("/:reviewId", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), ReviewController.getReviewById)
router.patch("/:reviewId", auth(UserRole.CUSTOMER), ReviewController.updateReview)
router.delete("/:reviewId", auth(UserRole.CUSTOMER, UserRole.ADMIN), ReviewController.deleteReview)
router.get("/", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), ReviewController.getAllReviews)
router.post("/", auth(UserRole.CUSTOMER), ReviewController.createReview)

export const reviewRouter = router