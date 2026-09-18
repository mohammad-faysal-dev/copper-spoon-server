import { prisma } from "../../lib/prisma";
import { CreateMealPayload } from "./meal.type";

const createMeal = async (userId: string, data: CreateMealPayload) => {
    const provider = await prisma.providerProfile.findUnique({
        where: {
            userId
        }
    })
    if (!provider) {
        throw new Error("Provider profile not found");
    }
    const result = await prisma.meal.create({
        data: {
            providerId: provider.id,
            ...data
        }
    })
    return result
}

const getAllMeals = async () => {
    const result = await prisma.meal.findMany({
        where: {
            isAvailable: true
        },
        include: {
            category: true,
            provider: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return result
}

const getMealById = async (mealId: string) => {
    const result = await prisma.meal.findUnique({
        where: {
            id: mealId
        },
        include: {
            category: true,
            provider: true,
            reviews: {
                include: {
                    customer: {
                        select: {
                            id: true,
                            name: true,
                            image: true,
                        }
                    }
                }
            }
        },
    })
    return result
}

export const MealService = {
    createMeal,
    getAllMeals,
    getMealById
}