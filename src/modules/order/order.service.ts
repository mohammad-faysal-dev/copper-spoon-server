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

const getOrderById = async (userId: string, orderId: string, role: string) => {
    const where: any = { id: orderId };
    if (role === "CUSTOMER") {
        where.customerId = userId;
    }

    const result = await prisma.order.findFirst({
        where,
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

const getAllOrders = async () => {
    const result = await prisma.order.findMany({
        include: {
            customer: true,
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
    createOrder,
    getMyOrders,
    getOrderById,
    updateOrderStatus,
    getAllOrders
}