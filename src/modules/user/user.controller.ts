
import { Request, Response } from "express";
import { userService } from "./user.service";

const getMyProfile = async (req: Request, res: Response) => {
    const user = await userService.getMyProfile(req.params.id as string);
    res.json({
        success: true,
        data: user
    })
}
export const userController = {
    getMyProfile
}