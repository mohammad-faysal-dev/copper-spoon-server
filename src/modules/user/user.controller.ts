
import { Request, Response } from "express";

const getProfile = async (req: Request, res: Response) => {
    const user = await userService.getMyProfile(req.user?.id);
    res.json({
        success: true,
        data: user
    })
}
export const userController = {
    getProfile
}