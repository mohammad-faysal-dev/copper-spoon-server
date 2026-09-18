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
export const CategoryService = {
    createCategory
}