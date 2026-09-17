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
export const ProviderService = {
    createProfile
}