import { NextFunction, Request, Response } from "express";

const createMeal = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.body
        const meal = await MealService.createMeal(userId, req.body)
        res.status(200).json(meal)
    }
    catch (e) {
        next(e)
    }
}

export const MealController = {
    createMeal
}