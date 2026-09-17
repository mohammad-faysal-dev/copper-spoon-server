import express from "express";
import { providerController } from "./provider.controller"

const router = express.Router()

router.get("/", providerController.getAllProviders)
router.post("/profile", providerController.createProfile)
router.get("/:providerId", providerController.getMyProfile)

export const providerRoute = router;