import { NextFunction, Request, Response } from "express";
import { ReviewService } from "./review.service";

const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const review = await ReviewService.createReview(user?.id as string, req.body)
        res.json(200).json(review)
    }
    catch (e) {
        next(e)
    }
}

export const ReviewController = {
    createReview
}