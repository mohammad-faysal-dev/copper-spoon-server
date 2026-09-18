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

export const ReviewService = {
    createReview
}