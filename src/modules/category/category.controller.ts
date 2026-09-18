import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";
import { success } from "better-auth";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const category = await CategoryService.createCategory(req.body)
        res.status(200).json({
            success: true,
            data: category
        })
    }
    catch (e) {
        next(e)
    }
}

const getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const catagorise = await CategoryService.getAllCategories()
        res.status(200).json({
            success: true,
            data: catagorise
        })
    }
    catch (e) {
        next(e)
    }
}

export const CategoryController = {
    createCategory,
    getAllCategories
}