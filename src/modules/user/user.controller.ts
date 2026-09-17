import { Request, Response } from "express";
import { userService } from "./user.service";


const getMyProfile = async (req: Request, res: Response) => {
    const user = await userService.getMyProfile(req.params.id as string);
    res.json({
        success: true,
        data: user
    })
}
const updateMyProfile = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const result = await userService.updateMyProfile(userId as string, req.body)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({
            message: "failed to update user"
        })
    }
}
export const userController = {
    getMyProfile,
    updateMyProfile
}