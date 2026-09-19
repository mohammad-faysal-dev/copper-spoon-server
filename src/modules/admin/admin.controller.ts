import { NextFunction, Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await AdminService.getAllUsers()
        res.status(200).json(users)
    }
    catch (e) {
        next(e)
    }
}

export const adminController = {
    getAllUsers
}