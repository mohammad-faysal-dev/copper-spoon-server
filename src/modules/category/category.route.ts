import { CategoryController } from "./category.controller"
import express from "express"

const router = express.Router()
router.post("/", CategoryController.createCategory)

export const categoryRoute = router 