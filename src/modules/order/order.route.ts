import express from "express";
import { OrderController } from "./order.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.post("/", auth(UserRole.CUSTOMER), OrderController.createOrder)
router.get("/my-orders", auth(UserRole.CUSTOMER), OrderController.getMyOrders)
router.get("/:orderId", OrderController.getOrderById);
router.patch("/:orderId", OrderController.updateOrderStatus);
router.get("/", OrderController.getAllOrders)
export const orderRouter = router 