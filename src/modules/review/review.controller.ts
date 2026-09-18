import { NextFunction, Request, Response } from "express";

const createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const review = await ReviewService.createReview(user?.id, req.res)
        res.json(200).json(review)
    }
    catch (e) {
        next(e)
    }
}

export const ReviewController = {
    createReview
}