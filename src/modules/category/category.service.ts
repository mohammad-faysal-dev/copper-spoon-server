import { prisma } from "../../lib/prisma"
import { CreateCategoryPayload } from "./category.type"

const createCategory = async (data: CreateCategoryPayload) => {
    const result = await prisma.category.create({
        data: {
            name: data.name
        }
    })
    return result
}
const getAllCategories = async () => {
    const result = await prisma.category.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return result
}
const getCategoryById = async (categoryId: string) => {
    const result = await prisma.category.findUnique({
        where: {
            id: categoryId
        },
        include: {
            meals: true
        }
    })
    return result
}
export const CategoryService = {
    createCategory,
    getAllCategories,
    getCategoryById
}