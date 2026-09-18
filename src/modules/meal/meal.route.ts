import express from "express"
import { MealController } from "./meal.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.get("/", auth(UserRole.PROVIDER), MealController.getAllMeals)
router.post("/", auth(UserRole.PROVIDER), MealController.createMeal)

export const melaRoute = router