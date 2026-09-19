import { prisma } from "../../lib/prisma";
import { CreateOrderPayload } from "./order.type";

const createOrder = async (userId: string, data: CreateOrderPayload) => {
    const result = await prisma.order.create({
        data: {
            customerId: userId,
            ...data,
            items: {
                create: data.items
            }
        },
        include: {
            items: {
                include: {
                    meal: true
                }
            }
        }
    })
    return result
}
export const OrderService = {
    createOrder
}