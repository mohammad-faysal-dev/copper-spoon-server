import { NextFunction, Request, Response } from "express"
import { ProviderService } from "./provider.service"

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { providerId } = req.params
        const result = await ProviderService.createProfile(providerId as string, req.body)
        res.status(200).json(result)
    }
    catch (error) {
        next(error)
    }
}

const getMyProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { providerId } = req.params
        const result = await ProviderService.getMyProfile(providerId as string)
        res.status(200).json(result)
    }
    catch (error) {
        next(error)
    }
}

const getAllProviders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProviderService.getAllProviders()
        res.status(200).json(result)
    }
    catch (error) {
        next(error)
    }
}

export const providerController = {
    createProfile,
    getMyProfile,
    getAllProviders
}