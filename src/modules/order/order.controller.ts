import { NextFunction, Request, Response } from "express";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user
        const order = await OrderService.createOrder(user, req.body)
        res.status(201).json(order)
    }
    catch (e) {

    }
}

export const orderController = {
    createOrder
}