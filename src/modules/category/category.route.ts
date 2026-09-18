import { CategoryController } from "./category.controller"
import express from "express"

const router = express.Router()
router.get("/", CategoryController.getAllCategories)
router.post("/", CategoryController.createCategory)

export const categoryRoute = router 