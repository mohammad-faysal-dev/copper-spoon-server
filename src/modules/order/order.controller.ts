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

export const orderController = {
    createOrder
}