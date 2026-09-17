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
export const userService = {
    getMyProfile
}