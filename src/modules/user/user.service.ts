import { Prisma, User } from "../../../generated/prisma/client"
import { prisma } from "../../lib/prisma"

const getMyProfile = async (userId: string) => {
    const result = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            status: true,
            phone: true,
            address: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return result
}

const updateMyProfile = async (userId: string, data: Partial<User>) => {
    const userData = await prisma.user.update({
        where: {
            id: userId
        },
        data,
        select: {
            id: true
        }
    })
    return userData
}
export const userService = {
    getMyProfile,
    updateMyProfile
}