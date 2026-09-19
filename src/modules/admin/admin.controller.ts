import { NextFunction, Request, Response } from "express";
import { AdminService } from "./admin.service";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await AdminService.getAllUsers()
        res.status(200).json(users)
    }
    catch (e) {
        next(e)
    }
}

export const AdminController = {
    getAllUsers
}