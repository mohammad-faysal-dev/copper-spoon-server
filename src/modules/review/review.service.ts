import { prisma } from "../../lib/prisma"
import { CreateReviewPayload, UpdateReviewPayload } from "./review.type"

const createReview = async (customerId: string, data: CreateReviewPayload) => {
    const result = await prisma.review.create({
        data: {
            customerId,
            ...data
        }
    })
    return result
}

const getAllReviews = async () => {
    const result = await prisma.review.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
    return result

}

const getReviewById = async (reviewId: string) => {
    const result = await prisma.review.findUnique({
        where: {
            id: reviewId
        },
        include: {
            customer: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                }
            }
        }
    })
    return result
}

const updateReview = async (reviewId: string, customerId: string, data: UpdateReviewPayload) => {
    const result = await prisma.review.update({
        where: {
            id: reviewId,
            customerId
        },
        data
    })
    return result
}

const deleteReview = async (reviewId: string, customerId: string) => {
    const customer = await prisma.review.findFirst({
        where: {
            id: reviewId,
            customerId
        }
    })
    if (!customer) {
        throw new Error("Customer profile not found");
    }

    return await prisma.review.delete({
        where: {
            id: reviewId
        }
    })

}
export const ReviewService = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview
}