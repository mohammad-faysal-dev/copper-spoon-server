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

const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params
        const category = await CategoryService.getCategoryById(categoryId as string)
        res.status(200).json({
            success: true,
            data: category
        })
    }
    catch (e) {
        next(e)
    }
}

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params
        const category = await CategoryService.updateCategory(categoryId, req.body)
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: category,
        })
    }
    catch (e) {
        next(e)
    }
}

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { categoryId } = req.params
        const category = await CategoryService.deleteCategory(categoryId)
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
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}