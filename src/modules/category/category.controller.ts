import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";

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

export const CategoryController = {
    createCategory
}