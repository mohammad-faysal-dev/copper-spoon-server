import { NextFunction, Request, Response } from "express";
import { MealService } from "./meal.service";

const createMeal = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const meal = await MealService.createMeal(user?.id as string, req.body)
        res.status(200).json(meal)
    }
    catch (e) {
        next(e)
    }
}

const getAllMeals = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const meal = await MealService.getAllMeals()
        res.status(200).json(meal)
    }
    catch (e) {
        next(e)
    }
}

const getMealById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { mealId } = req.params
        const meal = await MealService.getMealById(mealId as string)
        res.status(200).json(meal)
    }
    catch (e) {
        next(e)
    }
}

export const MealController = {
    createMeal,
    getAllMeals,
    getMealById
}