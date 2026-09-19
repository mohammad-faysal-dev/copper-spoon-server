import { NextFunction, Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const order = await OrderService.createOrder(user?.id as string, req.body)
        res.status(201).json(order)
    }
    catch (e) {
        next(e)
    }
}

const getMyOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const order = await OrderService.getMyOrders(user?.id as string)
        res.status(200).json(order)
    }
    catch (e) {
        next(e)
    }
}
const getOrderById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const { orderId } = req.params
        const order = await OrderService.getOrderById(user?.id, orderId)
        res.status(200).json(order)
    }
    catch (e) {
        next(e)
    }
}

export const orderController = {
    createOrder,
    getMyOrders,
    getOrderById
}