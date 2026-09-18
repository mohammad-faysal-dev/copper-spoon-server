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
export const MealService = {
    createMeal
}