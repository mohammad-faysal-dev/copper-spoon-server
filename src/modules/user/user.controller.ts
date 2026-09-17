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
    const result = await userService.updateMyProile(req.params.id)
    res.json({
        success: true,
        message: "Profile updated Sucessfully",
        data: result
    })
}
export const userController = {
    getMyProfile,
    updateMyProfile
}