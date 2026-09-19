import express from "express";
import { OrderController } from "./order.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router()

router.post("/", auth(UserRole.CUSTOMER), OrderController.createOrder)
router.get("/my-orders", auth(UserRole.CUSTOMER), OrderController.getMyOrders)
router.get("/:orderId", auth(UserRole.CUSTOMER, UserRole.PROVIDER, UserRole.ADMIN), OrderController.getOrderById);
router.patch("/:orderId", auth(UserRole.PROVIDER, UserRole.ADMIN), OrderController.updateOrderStatus);
router.get("/", auth(UserRole.PROVIDER, UserRole.ADMIN), OrderController.getAllOrders)
export const orderRouter = router 