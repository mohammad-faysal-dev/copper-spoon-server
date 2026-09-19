import { prisma } from "../../lib/prisma"
import { UpdateUserStatusPayload } from "./admin.type"

const getAllUsers = async () => {
    const result = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return result
}

const updateUserStatus = async (userId: string, data: UpdateUserStatusPayload) => {
    const result = await prisma.user.update({
        where: {
            id: userId
        }, data
    })
    return result
}

export const AdminService = {
    getAllUsers,
    updateUserStatus
}