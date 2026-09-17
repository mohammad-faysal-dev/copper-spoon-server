import { prisma } from "../../lib/prisma"

const createProfile = async (providerId: string, data: {
    restaurantName: string;
    description?: string;
    phone?: string;
    address?: string;
    image?: string;
}) => {
    const result = await prisma.providerProfile.create({
        data: {
            userId: providerId,
            ...data
        }
    })
    return result
}

const getMyProfile = async (providerId: string) => {
    const result = await prisma.providerProfile.findUnique({
        where: {
            userId: providerId
        },
        include: {
            meals: true
        }
    })
    return result
}

export const ProviderService = {
    createProfile,
    getMyProfile
}