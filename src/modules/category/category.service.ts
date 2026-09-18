import { prisma } from "../../lib/prisma"
import { CreateCategoryPayload, UpdateCategoryPayload } from "./category.type"

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
const updateCategory = async (categoryId: string, data: UpdateCategoryPayload) => {
    const result = await prisma.category.update({
        where: {
            id: categoryId
        },
        data
    })
    return result
}
export const CategoryService = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory
}