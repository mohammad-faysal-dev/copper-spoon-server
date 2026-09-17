import express from "express";
import { providerController } from "./provider.controller"

const router = express.Router()

router.post("/profile", providerController.createProfile)

export const providerRoute = router;