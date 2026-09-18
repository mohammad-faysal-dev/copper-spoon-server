import { CategoryController } from "./category.controller"
import express from "express"

const router = express.Router()
router.get("/", CategoryController.getAllCategories)

router.post("/", CategoryController.createCategory)
router.get("/:categoryId", CategoryController.getCategoryById)
router.patch("/:categoryId", CategoryController.updateCategory)
router.delete("/:categoryId", CategoryController.deleteCategory)


export const categoryRoute = router 