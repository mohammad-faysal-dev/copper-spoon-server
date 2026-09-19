import { NextFunction, Request, Response } from "express";
import { ReviewService } from "./review.service";
import { success } from "better-auth";

const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const review = await ReviewService.createReview(user?.id as string, req.body)
        res.status(200).json({
            success: true,
            data: review
        })
    }
    catch (e) {
        next(e)
    }
}

const getAllReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const review = await ReviewService.getAllReviews()
        res.status(200).json(review)
    }
    catch (e) {
        next(e)
    }
}

const getReviewById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { reviewId } = req.params
        const review = await ReviewService.getReviewById(reviewId as string)
        res.status(200).json(review)
    }
    catch (e) {
        next(e)
    }
}

const updateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const { reviewId } = req.params
        const review = await ReviewService.updateReview(reviewId, user?.id, req.body)
        res.status(200).json(review)
    }
    catch (e) {
        next(e)
    }
}

export const ReviewController = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview
}