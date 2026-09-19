import { prisma } from "../../lib/prisma"
import { CreateReviewPayload } from "./review.type"

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

export const ReviewService = {
    createReview,
    getAllReviews
}