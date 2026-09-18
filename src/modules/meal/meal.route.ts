import express from "express"
import { MealController } from "./meal.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.get("/", auth(UserRole.PROVIDER), MealController.getAllMeals)
router.get("/:mealId", auth(UserRole.PROVIDER), MealController.getMealById)
router.delete("/:mealId", auth(UserRole.PROVIDER), MealController.deleteMeal)
router.post("/", auth(UserRole.PROVIDER), MealController.createMeal)

export const melaRoute = router