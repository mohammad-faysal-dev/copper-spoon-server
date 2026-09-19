import { prisma } from "../../lib/prisma";
import { CreateOrderPayload, UpdateOrderStatusPayload } from "./order.type";

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

const getMyOrders = async (customerId: string) => {
    const result = await prisma.order.findMany({
        where: {
            customerId
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

const getOrderById = async (customerId: string, orderId: string) => {
    const result = await prisma.order.findUnique({
        where: {
            customerId,
            id: orderId
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

const updateOrderStatus = async (orderId: string, data: UpdateOrderStatusPayload) => {
    const result = await prisma.order.update({
        where: {
            id: orderId
        },
        data: {
            status: data.status
        }
    })
    return result
}

export const OrderService = {
    createOrder,
    getMyOrders,
    getOrderById,
    updateOrderStatus
}