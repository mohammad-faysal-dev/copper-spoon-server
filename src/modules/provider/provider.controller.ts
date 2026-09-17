import { NextFunction, Request, Response } from "express"

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { providerId } = req.params
        const result = await ProviderService.createProfile(providerId)
        res.status(200).json(result)
    }
    catch (error) {
        next(error)
    }
}

export const providerController = {
    createProfile
}