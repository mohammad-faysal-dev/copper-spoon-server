import express from "express"
import { MealController } from "./meal.controller"
import auth, { UserRole } from "../../middlewares/auth"

const router = express.Router()

router.get("/", MealController.getAllMeals)
router.get("/:mealId", MealController.getMealById)
router.delete("/:mealId", auth(UserRole.PROVIDER, UserRole.ADMIN), MealController.deleteMeal)
router.post("/", auth(UserRole.PROVIDER, UserRole.ADMIN), MealController.createMeal)

export const melaRoute = router