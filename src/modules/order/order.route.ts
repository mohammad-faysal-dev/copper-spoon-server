import express from "express";
import { orderController } from "./order.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.post("/", auth(UserRole.CUSTOMER), orderController.createOrder)
router.get("/", auth(UserRole.CUSTOMER), orderController.getMyOrders)

export const orderRouter = router 